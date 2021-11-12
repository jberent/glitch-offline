
function LoadModule($path) {
    
    $blk = gc $path
    if ($blk[$blk.length-1] -eq '</xml>') {
        # file is lines
        [xml] $doc = $blk;
    } else {
        # file is one line
        [xml] $doc = $blk.Substring(0, $blk.IndexOf("<?xml"));
    }

    $xml = $doc.xml
    #$xmlns = $xml.xmlns
    $variables = $xml.variables.variable | select-object -ExpandProperty `#text
    
    #$functionNames = $doc.xml.block.field.InnerText
    $blocks = $doc.xml.block
    
    $runOpMode = $blocks.Where({$_.deletable -eq 'false'}, 'First')
    $functions = $blocks.Where({$_.deletable -ne 'false'})
    
    $initFunction = $runOpMode.statement.block.next.block
    # findInitCode $runOpMode.statement.block.next
    # $initFunctionName = $initFunction.mutation.name

    @{
        'variables' = $variables
        'functions' = $functions | % {
            @{
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

$module = LoadModule '.\bot-repo\11617-A-RC\handleArm.module.blk'
$module.functions[2]
$module2 = LoadModule '.\bot-repo\11617-A-RC\ps.blk'
$module2.variables

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