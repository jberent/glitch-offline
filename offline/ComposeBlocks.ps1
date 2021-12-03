

$functionTypes = @(
    'procedures_defnoreturn' # - procedures_callnoreturn
    'procedures_defreturn' # - procedures_callreturn
    'procedures_ifreturn'
)
$varRefs = @(
    'variables_set' #<field name="VAR" id="R.KGs,DU0;~[^DGlGX,R">max1</field>
)

function LoadModule($path) {
    write-host $path
    
    $blk = gc $path
    
    if ($blk.GetType().Name -eq 'String') {
        # file is one line
        [xml] $doc = $blk.Substring(0, $blk.IndexOf("<?xml"));
    } else {
        $lastLine = $blk.Length
        do {
            $lastLine--
        } until ($blk[$lastLine].StartsWith("</xml>"))
        
        if ($blk[$lastLine] -eq "</xml>"){
            [xml] $extra = $blk[($lastLine+1)..($blk.Length-1)]
            # file is lines
        } else {
            [xml] $extra = $blk[$lastLine].Substring(6)
            $blk[$lastLine] = "</xml>"
        }
        [xml] $doc = $blk[0..$lastLine];       
    }
    @{
        'project' = $doc.xml    # xml
        'extra' = $extra        # #document
    }
}
function CleanModule($path) {
    $blocks = LoadBlocks (LoadModule $path)
    $blocks.variables
}

function LoadBlocks($module) {
    
    $xml = $module.project
    #$xmlns = $xml.xmlns
    $variables = $xml.variables.variable | select-object -ExpandProperty `#text
    
    #$functionNames = $doc.xml.block.field.InnerText
    $blocks = $doc.xml.block
    
    $runOpMode = $blocks.Where({$_.deletable -eq 'false'}, 'First')
    $functions = $blocks.Where({$_.deletable -ne 'false' -and ($functionTypes -contains $_.type)})
    
    $initFunction = $runOpMode.statement.block.next.block
    # findInitCode $runOpMode.statement.block.next
    # $initFunctionName = $initFunction.mutation.name

    @{
        'variables' = $variables
        'functions' = $functions | % {
            @{
                'type' = $_.Type
                'name' = $_.field.InnerText
                'body' = $_
            }
        }
        'initFunction' = $initFunction
    }
}

function findInitCode($next) {
    if ($next) {
        $block = $next.block
        # $block.mutation.name
        findInitCode $block.next
    }
} 
#

CleanModule $args[0] # '.\bot-repo\11617-A-RC\handleArm.module.blk'

#$module.functions
# $module2 = LoadModule '.\bot-repo\11617-A-RC\ps.blk'
# $module2.variables

# $blk.length
# $blk.IndexOf("<?xml");
# $blk[$blk.length - 2] # = "</xml>"
# $doc.GetType(); #XmlDocument
# $doc.FirstChild.GetType(); #XmlElement
# $variables #[1] #| get-member

# $functions.field.InnerText
# $functions.y

<#
$var = $xml.CreateElement("variable");
$var.InnerText = 'HD_HEX_40_COUNTS_PER_REV';
$xml.variables.AppendChild($var);

type      : procedures_defnoreturn
id        : WtpyD@tEu+EoY=P9iY,D
deletable : false
editable  : false
x         : 50
y         : 50
field     : field
comment   : comment
statement : statement

type      : procedures_defnoreturn
id        : Zz@Tu@_v=%@yN.IbIc%Q
x         : 551
y         : 46
field     : field
comment   : comment
statement : statement

type      : procedures_defnoreturn
id        : *Gi4H}5ie0v{Y9%p*.9!
x         : 551
y         : 437
field     : field
comment   : comment
statement : statement

type      : procedures_defnoreturn
id        : K5vS*D_(RmAIBZ.GJ=v%
x         : 551
y         : 616
field     : field
comment   : comment
statement : statement
#>