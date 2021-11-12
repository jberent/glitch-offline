$blk = gc '.\bot-repo\11617-A-RC\handleArm.module.blk'
$blk.length
$blk.IndexOf("<?xml");
#$blk[$blk.length - 2] # = "</xml>"
[xml] $doc = $blk.Substring(0, $blk.IndexOf("<?xml"));
# $doc.GetType(); #XmlDocument
#$doc.FirstChild.GetType(); #XmlElement

$variables = $doc.xml.variables.variable | select-object -ExpandProperty `#text
$variables #[1] #| get-member

$functionNames = $doc.xml.block.field.InnerText
$blocks = $doc.xml.block

$runOpMode = $blocks.Where({$_.deletable -eq 'false'}, 'First')
$functions = $blocks.Where({$_.deletable -ne 'false'})
$functions.field.InnerText
$functions.y
<#
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