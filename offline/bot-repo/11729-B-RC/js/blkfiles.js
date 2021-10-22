function getBlkFiles() {
    var BLK_FILES = [];
    return BLK_FILES;
}

function getOfflineConfigurationName() {
  return '11729-B-RC';
}
function getOfflineSampleName() {
  return 'NewOpMode';
}
  
function getSampleNamesJson() {
  var SAMPLE_NAMES = '[]';
}

function getSampleBlkFileContent(sampleName) {
  switch (sampleName) {
    case 'NewOpMode':  
    case '':
    default:
      return '<xml xmlns="https://developers.google.com/blockly/xml"><block type="procedures_defnoreturn" id="WtpyD@tEu+EoY=P9iY,D" deletable="false" editable="false" x="50" y="50"><field name="NAME">runOpMode</field><comment pinned="false" h="32" w="532">This function is executed when this Op Mode is selected from the Driver Station.</comment><statement name="STACK"><block type="comment" id="Lc#BFtj*NTB48YL;eBl."><field name="COMMENT">Put initialization blocks here.</field><next><block type="linearOpMode_waitForStart" id=":`$wN_ci`O;o6P0~.(+g"><next><block type="controls_if" id="}Q?5mbxSO8Di;i!__6[y"><value name="IF0"><block type="linearOpMode_opModeIsActive" id=")o%YFX/#9kvv^sgXr4~5"/></value><statement name="DO0"><block type="comment" id="(rU-p_T_/B|vExcs}liL"><field name="COMMENT">Put run blocks here.</field><next><block type="controls_whileUntil" id="^0Kagy/e+Ea{rbZPv2G6"><field name="MODE">WHILE</field><value name="BOOL"><block type="linearOpMode_opModeIsActive" id="e)cr{!2VIET83s,JWC.="/></value><statement name="DO"><block type="comment" id="Jh/;L$n@JuX8AQJDFCul"><field name="COMMENT">Put loop blocks here.</field><next><block type="telemetry_update" id="exvivmft-pX$n!1,8Ea$"/></next></block></statement></block></next></block></statement></block></next></block></next></block></statement></block></xml><?xml version=\'1.0\' encoding=\'UTF-8\' standalone=\'yes\' ?><Extra><OpModeMeta flavor="TELEOP" group="" autoTransition="" /><Enabled value="true" /></Extra> ';    
  }
}