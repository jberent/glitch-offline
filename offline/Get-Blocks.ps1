$server = "http://192.168.43.1:8080/"
$bot_repo = "bot-repo"
        
$bot = "test-bot"


function fetchHardware()
{
    $uri="$($server)hardware"
    Write-Host $uri
    Invoke-RestMethod $uri 
}

function fetchBlocks($bot)
{
    $blks = Invoke-RestMethod "$($server)list"
    $blks
}

function fetchBlock($urlName)
{
    $uri="$($server)fetch_blk?name=$urlName"
    Write-Host $uri
    Invoke-RestMethod $uri 

}

function saveBlock($projectName, $blk, $js) {
    $uri="$($server)save"
    $body = @{
        name = $projectName
        blk = $blk
        js = $js
    }
    Write-Host $uri
    Invoke-RestMethod -Method 'Post' -Uri $uri -Body $body -ContentType 'application/x-www-form-urlencoded'
}

function writeHardware($bot)
{
    fetchHardware | Set-Content ".\$bot_repo\$bot\js\hardware.js"
}

function writeBlocks($bot)
{
    fetchBlocks | % {        
        $file = ".\$bot_repo\$bot\$($_.name).blk"
        #$uri = [uri]::EscapeUriString($_.escapedName)
        $uri = [Web.HttpUtility]::UrlEncode($_.escapedName)
        fetchBlock $uri | Set-Content $file #escapedName _NOT_ espaced ?!?
    }
}

$glitchA = "11617-A-RC"
$glitchB = "11617-B-RC"
$gremlinsA = "11618-A-RC"
$gremlinsB = "11618-B-RC"
$crashA = "11729-A-RC"
$crashB = "11729-B-RC"
$testBot = "BMS-test-bot"


<#
Interface name : Wi-Fi
There are 1 networks currently visible.

SSID 1 : CSDGuest
    Network type            : Infrastructure
    Authentication          : Open
    Encryption              : None
#>


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

if ($cmd -eq "fetchBlocks")
{
    if ( Test-Path ".\$bot_repo\$bot") {
    } else {
        md ".\$bot_repo\$bot"
    }

    writeHardware $bot
    writeBlocks $bot
}
if ($cmd -eq "saveBlock")
{
    # todo
    $blk = gc .\bot-repo\11617-A-RC\basic-op-mode.blk
    # $blk[$blk.length - 2] = "</xml>"

    $projectName = "basic-op-mode"
    $js = "function none(){}"
    saveBlock $projectName $blk $js
}

#$blk = fetchBlock $name $urlName
#$blk | Set-Content .\$bot_repo\$bot\$name.blk