$botHost = "http://192.168.43.1:8080"
$server = "http://192.168.43.1:8080/"
$bot_repo = "bot-repo"
        
$bot = "BMS-test-bot"

$session = ""

$newblkjs = @'
/** 
* This function is executed when this Op Mode is selected from the Driver Station. 
*/ 
function runOpMode() {
    linearOpMode.waitForStart();
    if (linearOpMode.opModeIsActive()) { 
        while (linearOpMode.opModeIsActive()) {
             telemetry.update(); 
        } 
    } 
}
'@

function fetchHardware() {
    $uri="$($server)hardware"
    Write-Host $uri
    Invoke-RestMethod $uri 
}

function fetchBlocks {
    $blks = Invoke-RestMethod "$($server)list"
    $blks
}

function fetchBlock($blkName) {
    $urlName = [Web.HttpUtility]::UrlEncode($blkName)
    $uri="$($server)fetch_blk?name=$urlName"
    # Write-Host $uri
    Invoke-WebRequest $uri -SessionVariable 'session' 
    $Global:session = $session
}

function testSave {
    # testDelete
    # testSave2
    updateBotMode
}

function botStatus {
    # /server  -- these URIs
    "ping"
    Invoke-WebRequest "$($host)/ping?name=offline" -SessionVariable 'session'
    # {"serial":"8c1ec90b50a2b5df","connectedDevices":[{"currentPage":"offline","identity":"d8ba1c2c-bf2d-447c-a5f4-4d061bf8b26e","machineName":"Windows #1"}]} 
    "get_config_name"
    Invoke-WebRequest "$($host)/get_config_name" -SessionVariable 'session' 
    # basicBot1
    Invoke-WebRequest "$($host)/get_blocks_java_class_name?name=botMode" -SessionVariable 'session' 
    # botMode
    Invoke-WebRequest "$($host)/fetch_blk?name=$urlName" -SessionVariable 'session' 
    # \enable name: enable:

    # ws:192.168.43.1:8081 101 WebSocket Protocol Handshake
    #{"namespace":"system","type":"subscribeToNamespace","payload":"ControlHubUpdater"}
} 
function updateBotMode {
    "session = $session"
    $blkName = "botMode"
    [string] $blk = fetchBlock $blkName
    "session = $session - need global:session"
    $lines = $blk.Split("`n")
    $lines[3] = '<comment pinned="false" h="32" w="532">This file was saved from offline!.</comment>'
    $Global:session.UserAgent

    $blk =  [String]::Join("`n", $lines)
    write-host "Save New" $blkName
    #$js=$newblkjs
    $js='/* no javascript */'
    $body = @{name=$blkName;blk=$blk;js=$js}
    #$body
    $response = Invoke-WebRequest -Method Post -Uri "$($server)save" -Body $body -WebSession $Global:session
    Write-Host $response.StatusCode
}

function testDelete {
    $list = Invoke-WebRequest "$($server)list" -SessionVariable 'session'
    $blkName = "testBlk*testBlk1"
    write-host "Test Delete" $blkName
    $body = @{name=$blkName}
    $response = Invoke-WebRequest -Method Post -Uri "$($server)delete" -Body $body -WebSession $session
    Write-Host $response.StatusCode
}

function testSave2 {
    write-host "Test Save"
    $blkName = "testBlk"
    write-host "Test New" $blkName
    $blk = Invoke-WebRequest "$($server)new?name=$blkName" -SessionVariable 'session'
    #write-host "WebSession" $session.Cookies
    write-host $blk[0]
    
    write-host "Save New" $blkName
    #$js=$newblkjs
    $js='/* no javascript */'
    $body = @{name=$blkName;blk=$blk;js=$js}
    $response = Invoke-WebRequest -Method Post -Uri "$($server)save" -Body $body -WebSession $session
    Write-Host $response.StatusCode

    $uriName = [Web.HttpUtility]::UrlEncode($blkName)
    write-host "Fetch Blk" $uriName
    $fetch = Invoke-WebRequest "$($server)fetch_blk?name=$uriName" -SessionVariable 'session'
    if ($fetch) {
        $blkName = $uriName
        write-host "Test Delete" $blkName
        $body = @{name=$blkName}
        $response = Invoke-WebRequest -Method Post -Uri "$($server)delete" -Body $body -WebSession $session
        Write-Host $response.StatusCode
    
    } else {
        Write-Host "FETCH FAILED"
    }

    # $body = @{name=$projectName;blk=$blk;js=$newblkjs}
    # $response = Invoke-WebRequest -Method Post -Uri "$($server)save" -Body $body -ContentType $contentType -WebSession $session
    # Write-Host $response.StatusCode

}

function saveBlock($projectName, $blk, $js) {
    $blks = Invoke-WebRequest "$($server)list" -SessionVariable 'session'
    $session

    $uri="$($server)save"

    $body = @{name=$projectName;blk=$blk;js=$js}
    Write-Host $uri
    Write-Host $body.name
    $response = Invoke-WebRequest -Method Post -Uri "$($server)save" -Body $body -ContentType $contentType -WebSession $session
    Write-Host $response.StatusCode
    
    # $body = @{
    #     name = [uri]::EscapeUriString($projectName)
    #     blk = [uri]::EscapeUriString($blk)
    #     js = [uri]::EscapeUriString($js)
    # }
    # $params = 'name=' + [uri]::EscapeUriString($projectName) +
    #     '&blk=' + [uri]::EscapeUriString($blk) +
    #     '&js=' + [uri]::EscapeUriString($js)
    # $contentType = 'application/x-www-form-urlencoded' 

    #Write-Host $params
    # Invoke-RestMethod -Method Post -Uri $uri -Body $params -ResponseHeadersVariable header -StatusCodeVariable code -TransferEncoding Gzip
    #write-host $header
}

function writeHardware($bot)
{
    write-host ".\$bot_repo\$bot\js\hardware.js"
    fetchHardware | Set-Content ".\$bot_repo\$bot\js\hardware.js"
}

function writeBlocks($bot)
{
    $list = fetchBlocks
    write-host ".\$bot_repo\$bot\list.json"
    $list | Set-Content ".\$bot_repo\$bot\list.json"
    $list | % {        
        $file = ".\$bot_repo\$bot\$($_.name).blk"
        write-host $file
        # no -$uri = [uri]::EscapeUriString($_.escapedName)
        # yes -$uri = [Web.HttpUtility]::UrlEncode($_.escapedName)
        fetchBlock $_.escapedName | Set-Content $file #escapedName _NOT_ espaced ?!?
    }
}

function SaveBot ([string] $msg){
    $bot = BotNetwork
    if ($bot) {

        $path = ".\$bot_repo\$bot"
        if ( Test-Path $path) {
        } else {
            md $path
        }
        
        $branch = git rev-parse --abbrev-ref HEAD
        
        $resp = Invoke-WebRequest "$($botHost)/get_config_name" -SessionVariable 'session' 
        if ($resp.StatusCode -eq 200) {
            $botConfig = $resp.Content
            
            $botBranch = "$bot/$botConfig"
            write-host "Saving Bot Pt 1" $path $botConfig "ON" $branch
            git status --short
            if ($botBranch -ne $branch){
                if (git rev-parse --verify --quiet $botBranch) {
                    git checkout $botBranch
                } else {
                    git checkout -b $botBranch
                }
            }
            $branch = git rev-parse --abbrev-ref HEAD
            write-host "Saving bot Pt 2" $path $botConfig "ON" $branch
            writeHardware $bot
            writeBlocks $bot
            if ($msg) {
                git add .
                git commit -m $msg
            }
        }
    }
}

<#
Interface name : Wi-Fi
There are 1 networks currently visible.

SSID 1 : CSDGuest
    Network type            : Infrastructure
    Authentication          : Open
    Encryption              : None
#>

function BotNetwork {
    $networks = netsh wlan show networks
    $ssid = $networks[4].split(":")[1].trim()
    
    if ($ssid.startsWith("11617-") -or $ssid.startsWith("11618-") -or $ssid.startsWith("11729-") -or $ssid.startsWith("BMS-")) {
        $ssid
    } else {
        # ??
    } 
}

function cli {
$networks = netsh wlan show networks
$ssid = $networks[4].split(":")[1].trim()

if ($ssid.startsWith("11617-") -or $ssid.startsWith("11618-") -or $ssid.startsWith("11729-") -or $ssid.startsWith("BMS-")) {
    $bot = $ssid
} else {
    $bot = $args[1]
}

$args
$bot
if ($args) {
    $cmd = $args[0]
} else {
    $cmd = "fetchBlocks"
}

if ($cmd -eq "test") {
    testSave
}
if ($cmd -eq "fetchBlocks")
{
    SaveBot
}
if ($cmd -eq "saveBlock")
{
    # todo
    #$blk = gc .\bot-repo\11617-A-RC\basic-op-mode.blk
    $blk = gc '.\bot-repo\BMS-test-bot\Save Test.blk'
    # $blk[$blk.length - 2] = "</xml>"

    $projectName = "Save Test"
    $js = @'
/** 
* This function is executed when this Op Mode is selected from the Driver Station. 
*/ 
function runOpMode() {
    linearOpMode.waitForStart();
    if (linearOpMode.opModeIsActive()) { 
        while (linearOpMode.opModeIsActive()) {
             telemetry.update(); 
        } 
    } 
}
'@
    saveBlock $projectName $blk $js
}

#$blk = fetchBlock $name $urlName
#$blk | Set-Content .\$bot_repo\$bot\$name.blk
}