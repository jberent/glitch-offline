
function getToolbox() {
  return '<xml id="toolbox" style="display: none"><category name="LinearOpMode"><block type="linearOpMode_waitForStart"></block><block type="linearOpMode_idle"></block><block type="linearOpMode_sleep_Number"><value name="MILLISECONDS"><shadow type="math_number"><field name="NUM">1000</field></shadow></value></block><block type="linearOpMode_opModeIsActive"></block><block type="linearOpMode_isStarted"></block><block type="linearOpMode_isStopRequested"></block><block type="linearOpMode_getRuntime_Number"></block></category><category name="Gamepad"><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">A</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">AtRest</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">B</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">Back</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">DpadDown</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">DpadLeft</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">DpadRight</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">DpadUp</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">Guide</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">LeftBumper</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">LeftStickButton</field></block><block type="gamepad_getProperty_Number"><field name="IDENTIFIER">gamepad1</field><field name="PROP">LeftStickX</field></block><block type="gamepad_getProperty_Number"><field name="IDENTIFIER">gamepad1</field><field name="PROP">LeftStickY</field></block><block type="gamepad_getProperty_Number"><field name="IDENTIFIER">gamepad1</field><field name="PROP">LeftTrigger</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">RightBumper</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">RightStickButton</field></block><block type="gamepad_getProperty_Number"><field name="IDENTIFIER">gamepad1</field><field name="PROP">RightStickX</field></block><block type="gamepad_getProperty_Number"><field name="IDENTIFIER">gamepad1</field><field name="PROP">RightStickY</field></block><block type="gamepad_getProperty_Number"><field name="IDENTIFIER">gamepad1</field><field name="PROP">RightTrigger</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">Start</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">X</field></block><block type="gamepad_getProperty_Boolean"><field name="IDENTIFIER">gamepad1</field><field name="PROP">Y</field></block></category><category name="Actuators"></category><category name="Sensors"></category><category name="Other Devices"></category><category name="Android"><category name="SoundPool"><block type="androidSoundPool_initialize"></block><block type="androidSoundPool_preloadSound"><value name="SOUND_NAME"><shadow type="androidSoundPoolSkyStone_typedEnum_soundResource"></shadow></value></block><block type="androidSoundPool_preloadSound"><value name="SOUND_NAME"><shadow type="text"><field name="TEXT">click.wav</field></shadow></value></block><block type="androidSoundPool_play"><value name="SOUND_NAME"><shadow type="androidSoundPoolSkyStone_typedEnum_soundResource"></shadow></value></block><block type="androidSoundPool_play"><value name="SOUND_NAME"><shadow type="text"><field name="TEXT">click.wav</field></shadow></value></block><block type="androidSoundPool_stop"></block><block type="androidSoundPool_setProperty_Number"><field name="PROP">Volume</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1.0</field></shadow></value></block><block type="androidSoundPool_getProperty_Number"><field name="PROP">Volume</field></block><block type="androidSoundPool_setProperty_Number"><field name="PROP">Rate</field><value name="VALUE"><shadow type="math_number"><field name="NUM">2.0</field></shadow></value></block><block type="androidSoundPool_getProperty_Number"><field name="PROP">Rate</field></block><block type="androidSoundPool_setProperty_Number"><field name="PROP">Loop</field><value name="VALUE"><shadow type="math_number"><field name="NUM">3</field></shadow></value></block><block type="androidSoundPool_getProperty_Number"><field name="PROP">Loop</field></block></category><category name="TextToSpeech"><block type="androidTextToSpeech_initialize"></block><block type="androidTextToSpeech_getProperty_String"><field name="PROP">Status</field></block><block type="androidTextToSpeech_getProperty_String"><field name="PROP">LanguageCode</field></block><block type="androidTextToSpeech_getProperty_String"><field name="PROP">CountryCode</field></block><block type="androidTextToSpeech_getProperty_Boolean"><field name="PROP">IsSpeaking</field></block><block type="androidTextToSpeech_setProperty_Number"><field name="PROP">Pitch</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1.0</field></shadow></value></block><block type="androidTextToSpeech_setProperty_Number"><field name="PROP">SpeechRate</field><value name="VALUE"><shadow type="math_number"><field name="NUM">1.0</field></shadow></value></block><block type="androidTextToSpeech_isLanguageAvailable_String"><value name="LANGUAGE_CODE"><shadow type="text"><field name="TEXT">en</field></shadow><block type="locale_languageCode"></block></value></block><block type="androidTextToSpeech_isLanguageAndCountryAvailable_String"><value name="LANGUAGE_CODE"><shadow type="text"><field name="TEXT">en</field></shadow><block type="locale_languageCode"></block></value><value name="COUNTRY_CODE"><shadow type="text"><field name="TEXT">US</field></shadow><block type="locale_countryCode"></block></value></block><block type="androidTextToSpeech_setLanguage_String"><value name="LANGUAGE_CODE"><shadow type="text"><field name="TEXT">en</field></shadow><block type="locale_languageCode"></block></value></block><block type="androidTextToSpeech_setLanguageAndCountry_String"><value name="LANGUAGE_CODE"><shadow type="text"><field name="TEXT">en</field></shadow><block type="locale_languageCode"></block></value><value name="COUNTRY_CODE"><shadow type="text"><field name="TEXT">US</field></shadow><block type="locale_countryCode"></block></value></block><block type="androidTextToSpeech_speak_String"><value name="TEXT"><shadow type="text"><field name="TEXT">Get to the choppa!</field></shadow></value></block></category></category><category name="Utilities"><category name="Acceleration"><block type="acceleration_getProperty_DistanceUnit"><field name="PROP">DistanceUnit</field><value name="ACCELERATION"><block type="variables_get"><field name="VAR">{accelerationVariable}</field></block></value></block><block type="acceleration_getProperty_Number"><field name="PROP">XAccel</field><value name="ACCELERATION"><block type="variables_get"><field name="VAR">{accelerationVariable}</field></block></value></block><block type="acceleration_getProperty_Number"><field name="PROP">YAccel</field><value name="ACCELERATION"><block type="variables_get"><field name="VAR">{accelerationVariable}</field></block></value></block><block type="acceleration_getProperty_Number"><field name="PROP">ZAccel</field><value name="ACCELERATION"><block type="variables_get"><field name="VAR">{accelerationVariable}</field></block></value></block><block type="acceleration_getProperty_Number"><field name="PROP">AcquisitionTime</field><value name="ACCELERATION"><block type="variables_get"><field name="VAR">{accelerationVariable}</field></block></value></block><block type="acceleration_toDistanceUnit"><value name="ACCELERATION"><block type="variables_get"><field name="VAR">{accelerationVariable}</field></block></value><value name="DISTANCE_UNIT"><shadow type="navigation_typedEnum_distanceUnit"></shadow></value></block><block type="acceleration_toText"><value name="ACCELERATION"><block type="variables_get"><field name="VAR">{accelerationVariable}</field></block></value></block><block type="acceleration_create"></block><block type="acceleration_create_withArgs"><value name="DISTANCE_UNIT"><shadow type="navigation_typedEnum_distanceUnit"></shadow></value><value name="X_ACCEL"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="Y_ACCEL"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="Z_ACCEL"><shadow type="math_number"><field name="NUM">30</field></shadow></value><value name="ACQUISITION_TIME"><shadow type="system_nanoTime"></shadow></value></block><block type="acceleration_fromGravity"><value name="GX"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="GY"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="GZ"><shadow type="math_number"><field name="NUM">30</field></shadow></value><value name="ACQUISITION_TIME"><shadow type="system_nanoTime"></shadow></value></block></category><category name="AngleUnit"><block type="navigation_angleUnit_normalize"><value name="ANGLE"><shadow type="math_number"><field name="NUM">360</field></shadow></value><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"><field name="ANGLE_UNIT">DEGREES</field></shadow></value></block><block type="navigation_angleUnit_convert"><value name="ANGLE"><shadow type="math_number"><field name="NUM">3.14</field></shadow></value><value name="FROM_ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"><field name="ANGLE_UNIT">RADIANS</field></shadow></value><value name="TO_ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"><field name="ANGLE_UNIT">DEGREES</field></shadow></value></block></category><category name="AngularVelocity"><block type="angularVelocity_getProperty_AngleUnit"><field name="PROP">AngleUnit</field><value name="ANGULAR_VELOCITY"><block type="variables_get"><field name="VAR">{angularVelocityVariable}</field></block></value></block><block type="angularVelocity_getProperty_Number"><field name="PROP">XRotationRate</field><value name="ANGULAR_VELOCITY"><block type="variables_get"><field name="VAR">{angularVelocityVariable}</field></block></value></block><block type="angularVelocity_getProperty_Number"><field name="PROP">YRotationRate</field><value name="ANGULAR_VELOCITY"><block type="variables_get"><field name="VAR">{angularVelocityVariable}</field></block></value></block><block type="angularVelocity_getProperty_Number"><field name="PROP">ZRotationRate</field><value name="ANGULAR_VELOCITY"><block type="variables_get"><field name="VAR">{angularVelocityVariable}</field></block></value></block><block type="angularVelocity_getRotationRate"><value name="ANGULAR_VELOCITY"><block type="variables_get"><field name="VAR">{angularVelocityVariable}</field></block></value><value name="AXIS"><shadow type="navigation_typedEnum_axis"></shadow></value></block><block type="angularVelocity_getProperty_Number"><field name="PROP">AcquisitionTime</field><value name="ANGULAR_VELOCITY"><block type="variables_get"><field name="VAR">{angularVelocityVariable}</field></block></value></block><block type="angularVelocity_toAngleUnit"><value name="ANGULAR_VELOCITY"><block type="variables_get"><field name="VAR">{angularVelocityVariable}</field></block></value><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value></block><block type="angularVelocity_create"></block><block type="angularVelocity_create_withArgs"><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value><value name="X_ROTATION_RATE"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y_ROTATION_RATE"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z_ROTATION_RATE"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="ACQUISITION_TIME"><shadow type="system_nanoTime"></shadow></value></block></category><category name="Axis"><block type="navigation_typedEnum_axis"><field name="AXIS">X</field></block><block type="navigation_typedEnum_axis"><field name="AXIS">Y</field></block><block type="navigation_typedEnum_axis"><field name="AXIS">Z</field></block></category><category name="Color"><block type="color_getProperty_Number"><field name="PROP">Red</field><value name="COLOR"><block type="variables_get"><field name="VAR">{colorVariable}</field></block></value></block><block type="color_getProperty_Number"><field name="PROP">Green</field><value name="COLOR"><block type="variables_get"><field name="VAR">{colorVariable}</field></block></value></block><block type="color_getProperty_Number"><field name="PROP">Blue</field><value name="COLOR"><block type="variables_get"><field name="VAR">{colorVariable}</field></block></value></block><block type="color_getProperty_Number"><field name="PROP">Alpha</field><value name="COLOR"><block type="variables_get"><field name="VAR">{colorVariable}</field></block></value></block><block type="color_getProperty_Number"><field name="PROP">Hue</field><value name="COLOR"><block type="variables_get"><field name="VAR">{colorVariable}</field></block></value></block><block type="color_getProperty_Number"><field name="PROP">Saturation</field><value name="COLOR"><block type="variables_get"><field name="VAR">{colorVariable}</field></block></value></block><block type="color_getProperty_Number"><field name="PROP">Value</field><value name="COLOR"><block type="variables_get"><field name="VAR">{colorVariable}</field></block></value></block><block type="color_rgbToColor_Number"><value name="RED"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">255</field></shadow></value></block><block type="color_argbToColor_Number"><value name="ALPHA"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="RED"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">255</field></shadow></value></block><block type="color_hsvToColor_Number"><value name="HUE"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="SATURATION"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="VALUE"><shadow type="math_number"><field name="NUM">255</field></shadow></value></block><block type="color_ahsvToColor_Number"><value name="ALPHA"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="HUE"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="SATURATION"><shadow type="math_number"><field name="NUM">255</field></shadow></value><value name="VALUE"><shadow type="math_number"><field name="NUM">255</field></shadow></value></block><block type="color_textToColor_Number"><value name="TEXT"><shadow type="text"><field name="TEXT">#FFFFFF</field></shadow></value></block><block type="color_textToColor_Number"><value name="TEXT"><shadow type="text"><field name="TEXT">#FFFFFFFF</field></shadow></value></block><block type="color_textToColor_Number"><value name="TEXT"><shadow type="text"><field name="TEXT">red</field></shadow></value></block><block type="normalizedColors_getProperty_Number"><field name="PROP">Red</field><value name="NORMALIZED_COLORS"><block type="variables_get"><field name="VAR">{normalizedColorsVariable}</field></block></value></block><block type="normalizedColors_getProperty_Number"><field name="PROP">Green</field><value name="NORMALIZED_COLORS"><block type="variables_get"><field name="VAR">{normalizedColorsVariable}</field></block></value></block><block type="normalizedColors_getProperty_Number"><field name="PROP">Blue</field><value name="NORMALIZED_COLORS"><block type="variables_get"><field name="VAR">{normalizedColorsVariable}</field></block></value></block><block type="normalizedColors_getProperty_Number"><field name="PROP">Alpha</field><value name="NORMALIZED_COLORS"><block type="variables_get"><field name="VAR">{normalizedColorsVariable}</field></block></value></block><block type="normalizedColors_getProperty_Number"><field name="PROP">Color</field><value name="NORMALIZED_COLORS"><block type="variables_get"><field name="VAR">{normalizedColorsVariable}</field></block></value></block></category><category name="DbgLog"><block type="dbgLog_msg"><value name="MESSAGE"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="dbgLog_error"><value name="MESSAGE"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block></category><category name="MagneticFlux"><block type="magneticFlux_getProperty_Number"><field name="PROP">X</field><value name="MAGNETIC_FLUX"><block type="variables_get"><field name="VAR">{magneticFluxVariable}</field></block></value></block><block type="magneticFlux_getProperty_Number"><field name="PROP">Y</field><value name="MAGNETIC_FLUX"><block type="variables_get"><field name="VAR">{magneticFluxVariable}</field></block></value></block><block type="magneticFlux_getProperty_Number"><field name="PROP">Z</field><value name="MAGNETIC_FLUX"><block type="variables_get"><field name="VAR">{magneticFluxVariable}</field></block></value></block><block type="magneticFlux_getProperty_Number"><field name="PROP">AcquisitionTime</field><value name="MAGNETIC_FLUX"><block type="variables_get"><field name="VAR">{magneticFluxVariable}</field></block></value></block><block type="magneticFlux_toText"><value name="MAGNETIC_FLUX"><block type="variables_get"><field name="VAR">{magneticFluxVariable}</field></block></value></block><block type="magneticFlux_create"></block><block type="magneticFlux_create_withArgs"><value name="X"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">30</field></shadow></value><value name="ACQUISITION_TIME"><shadow type="system_nanoTime"></shadow></value></block></category><category name="Matrix"><block type="openGLMatrix_identityMatrix"></block><block type="openGLMatrix_multiplied"><value name="MATRIX1"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="MATRIX2"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="openGLMatrix_multiply"><value name="MATRIX1"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="MATRIX2"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="openGLMatrix_rotation"><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value><value name="ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="DX"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="DY"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="DZ"><shadow type="math_number"><field name="NUM">30</field></shadow></value></block><block type="openGLMatrix_rotation_withAxesArgs"><value name="AXES_REFERENCE"><shadow type="navigation_typedEnum_axesReference"></shadow></value><value name="AXES_ORDER"><shadow type="navigation_typedEnum_axesOrder"></shadow></value><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value><value name="FIRST_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="SECOND_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="THIRD_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="openGLMatrix_rotate"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value><value name="ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="DX"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="DY"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="DZ"><shadow type="math_number"><field name="NUM">30</field></shadow></value></block><block type="openGLMatrix_rotate_withAxesArgs"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="AXES_REFERENCE"><shadow type="navigation_typedEnum_axesReference"></shadow></value><value name="AXES_ORDER"><shadow type="navigation_typedEnum_axesOrder"></shadow></value><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value><value name="FIRST_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="SECOND_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="THIRD_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="openGLMatrix_rotated"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value><value name="ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="DX"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="DY"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="DZ"><shadow type="math_number"><field name="NUM">30</field></shadow></value></block><block type="openGLMatrix_rotated_withAxesArgs"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="AXES_REFERENCE"><shadow type="navigation_typedEnum_axesReference"></shadow></value><value name="AXES_ORDER"><shadow type="navigation_typedEnum_axesOrder"></shadow></value><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value><value name="FIRST_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="SECOND_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="THIRD_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="openGLMatrix_scale_with3"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="SCALE_X"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="SCALE_Y"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="SCALE_Z"><shadow type="math_number"><field name="NUM">30</field></shadow></value></block><block type="openGLMatrix_scale_with1"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="SCALE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="openGLMatrix_scaled_with3"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="SCALE_X"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="SCALE_Y"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="SCALE_Z"><shadow type="math_number"><field name="NUM">30</field></shadow></value></block><block type="openGLMatrix_scaled_with1"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="SCALE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="openGLMatrix_translation"><value name="DX"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="DY"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="DZ"><shadow type="math_number"><field name="NUM">30</field></shadow></value></block><block type="openGLMatrix_translate"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="DX"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="DY"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="DZ"><shadow type="math_number"><field name="NUM">30</field></shadow></value></block><block type="openGLMatrix_translated"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="DX"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="DY"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="DZ"><shadow type="math_number"><field name="NUM">30</field></shadow></value></block><block type="openGLMatrix_create"></block><block type="openGLMatrix_create_withMatrixF"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_getProperty_Number"><field name="PROP">NumCols</field><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_getProperty_Number"><field name="PROP">NumRows</field><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_diagonalMatrix"><value name="DIM"><shadow type="math_number"><field name="NUM">4</field></shadow></value><value name="SCALE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="matrixF_diagonalMatrix_withVector"><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="matrixF_identityMatrix"><value name="DIM"><shadow type="math_number"><field name="NUM">4</field></shadow></value></block><block type="matrixF_get"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="ROW"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="COL"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="matrixF_put"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="ROW"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="COL"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="VALUE"><shadow type="math_number"><field name="NUM">123</field></shadow></value></block><block type="matrixF_getRow"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="ROW"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="matrixF_getColumn"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="COL"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="matrixF_added_withMatrix"><value name="MATRIX1"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="MATRIX2"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_added_withVector"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="matrixF_add_withMatrix"><value name="MATRIX1"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="MATRIX2"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_add_withVector"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="matrixF_multiplied_withMatrix"><value name="MATRIX1"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="MATRIX2"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_multiplied_withScale"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="SCALE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="matrixF_multiplied_withVector"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="matrixF_multiply_withMatrix"><value name="MATRIX1"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="MATRIX2"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_multiply_withScale"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="SCALE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="matrixF_multiply_withVector"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="matrixF_slice"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="ROW"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="COL"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="NUM_ROWS"><shadow type="math_number"><field name="NUM">2</field></shadow></value><value name="NUM_COLS"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block><block type="matrixF_subtracted_withMatrix"><value name="MATRIX1"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="MATRIX2"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_subtracted_withVector"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="matrixF_subtract_withMatrix"><value name="MATRIX1"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="MATRIX2"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_subtract_withVector"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="matrixF_inverted"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_transform"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="matrixF_transposed"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_toText"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_formatAsTransform"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_formatAsTransform_withArgs"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value><value name="AXES_REFERENCE"><shadow type="navigation_typedEnum_axesReference"></shadow></value><value name="AXES_ORDER"><shadow type="navigation_typedEnum_axesOrder"></shadow></value><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value></block><block type="matrixF_toVector"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="matrixF_getTranslation"><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block></category><category name="Orientation"><block type="orientation_getProperty_AxesReference"><field name="PROP">AxesReference</field><value name="ORIENTATION"><block type="variables_get"><field name="VAR">{orientationVariable}</field></block></value></block><block type="orientation_getProperty_AxesOrder"><field name="PROP">AxesOrder</field><value name="ORIENTATION"><block type="variables_get"><field name="VAR">{orientationVariable}</field></block></value></block><block type="orientation_getProperty_AngleUnit"><field name="PROP">AngleUnit</field><value name="ORIENTATION"><block type="variables_get"><field name="VAR">{orientationVariable}</field></block></value></block><block type="orientation_getProperty_Number"><field name="PROP">FirstAngle</field><value name="ORIENTATION"><block type="variables_get"><field name="VAR">{orientationVariable}</field></block></value></block><block type="orientation_getProperty_Number"><field name="PROP">SecondAngle</field><value name="ORIENTATION"><block type="variables_get"><field name="VAR">{orientationVariable}</field></block></value></block><block type="orientation_getProperty_Number"><field name="PROP">ThirdAngle</field><value name="ORIENTATION"><block type="variables_get"><field name="VAR">{orientationVariable}</field></block></value></block><block type="orientation_getProperty_Number"><field name="PROP">AcquisitionTime</field><value name="ORIENTATION"><block type="variables_get"><field name="VAR">{orientationVariable}</field></block></value></block><block type="orientation_toAngleUnit"><value name="ORIENTATION"><block type="variables_get"><field name="VAR">{orientationVariable}</field></block></value><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value></block><block type="orientation_toAxesReference"><value name="ORIENTATION"><block type="variables_get"><field name="VAR">{orientationVariable}</field></block></value><value name="AXES_REFERENCE"><shadow type="navigation_typedEnum_axesReference"></shadow></value></block><block type="orientation_toAxesOrder"><value name="ORIENTATION"><block type="variables_get"><field name="VAR">{orientationVariable}</field></block></value><value name="AXES_ORDER"><shadow type="navigation_typedEnum_axesOrder"></shadow></value></block><block type="orientation_toText"><value name="ORIENTATION"><block type="variables_get"><field name="VAR">{orientationVariable}</field></block></value></block><block type="orientation_getRotationMatrix"><value name="ORIENTATION"><block type="variables_get"><field name="VAR">{orientationVariable}</field></block></value></block><block type="orientation_getRotationMatrix_withArgs"><value name="AXES_REFERENCE"><shadow type="navigation_typedEnum_axesReference"></shadow></value><value name="AXES_ORDER"><shadow type="navigation_typedEnum_axesOrder"></shadow></value><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value><value name="FIRST_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="SECOND_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="THIRD_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="orientation_create"></block><block type="orientation_create_withArgs"><value name="AXES_REFERENCE"><shadow type="navigation_typedEnum_axesReference"></shadow></value><value name="AXES_ORDER"><shadow type="navigation_typedEnum_axesOrder"></shadow></value><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value><value name="FIRST_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="SECOND_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="THIRD_ANGLE"><shadow type="math_number"><field name="NUM">90</field></shadow></value><value name="ACQUISITION_TIME"><shadow type="system_nanoTime"></shadow></value></block><block type="orientation_getOrientation"><value name="AXES_REFERENCE"><shadow type="navigation_typedEnum_axesReference"></shadow></value><value name="AXES_ORDER"><shadow type="navigation_typedEnum_axesOrder"></shadow></value><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value></block></category><category name="PIDFCoefficients"><block type="pidfCoefficients_create"></block><block type="pidfCoefficients_create_withPIDFAlgorithm"><value name="P"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="I"><shadow type="math_number"><field name="NUM">3</field></shadow></value><value name="D"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="F"><shadow type="math_number"><field name="NUM">7</field></shadow></value><value name="ALGORITHM"><shadow type="pidfCoefficients_typedEnum_motorControlAlgorithm"><field name="MOTOR_CONTROL_ALGORITHM">PIDF</field></shadow></value></block><block type="pidfCoefficients_create_withPIDF"><value name="P"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="I"><shadow type="math_number"><field name="NUM">3</field></shadow></value><value name="D"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="F"><shadow type="math_number"><field name="NUM">7</field></shadow></value></block><block type="pidfCoefficients_create_withPIDFCoefficients"><value name="PIDF_COEFFICIENTS"><block type="variables_get"><field name="VAR">{pidfCoefficientsVariable}</field></block></value></block><block type="pidfCoefficients_setProperty_Number"><field name="PROP">P</field><value name="PIDF_COEFFICIENTS"><block type="variables_get"><field name="VAR">{pidfCoefficientsVariable}</field></block></value><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="pidfCoefficients_getProperty_Number"><field name="PROP">P</field><value name="PIDF_COEFFICIENTS"><block type="variables_get"><field name="VAR">{pidfCoefficientsVariable}</field></block></value></block><block type="pidfCoefficients_setProperty_Number"><field name="PROP">I</field><value name="PIDF_COEFFICIENTS"><block type="variables_get"><field name="VAR">{pidfCoefficientsVariable}</field></block></value><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="pidfCoefficients_getProperty_Number"><field name="PROP">I</field><value name="PIDF_COEFFICIENTS"><block type="variables_get"><field name="VAR">{pidfCoefficientsVariable}</field></block></value></block><block type="pidfCoefficients_setProperty_Number"><field name="PROP">D</field><value name="PIDF_COEFFICIENTS"><block type="variables_get"><field name="VAR">{pidfCoefficientsVariable}</field></block></value><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="pidfCoefficients_getProperty_Number"><field name="PROP">D</field><value name="PIDF_COEFFICIENTS"><block type="variables_get"><field name="VAR">{pidfCoefficientsVariable}</field></block></value></block><block type="pidfCoefficients_setProperty_Number"><field name="PROP">F</field><value name="PIDF_COEFFICIENTS"><block type="variables_get"><field name="VAR">{pidfCoefficientsVariable}</field></block></value><value name="VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="pidfCoefficients_getProperty_Number"><field name="PROP">F</field><value name="PIDF_COEFFICIENTS"><block type="variables_get"><field name="VAR">{pidfCoefficientsVariable}</field></block></value></block><block type="pidfCoefficients_setProperty_MotorControlAlgorithm"><field name="PROP">Algorithm</field><value name="PIDF_COEFFICIENTS"><block type="variables_get"><field name="VAR">{pidfCoefficientsVariable}</field></block></value><value name="VALUE"><shadow type="pidfCoefficients_typedEnum_motorControlAlgorithm"><field name="MOTOR_CONTROL_ALGORITHM">PIDF</field></shadow></value></block><block type="pidfCoefficients_getProperty_MotorControlAlgorithm"><field name="PROP">Algorithm</field><value name="PIDF_COEFFICIENTS"><block type="variables_get"><field name="VAR">{pidfCoefficientsVariable}</field></block></value></block><block type="pidfCoefficients_toText"><value name="PIDF_COEFFICIENTS"><block type="variables_get"><field name="VAR">{pidfCoefficientsVariable}</field></block></value></block></category><category name="Position"><block type="position_getProperty_DistanceUnit"><field name="PROP">DistanceUnit</field><value name="POSITION"><block type="variables_get"><field name="VAR">{positionVariable}</field></block></value></block><block type="position_getProperty_Number"><field name="PROP">X</field><value name="POSITION"><block type="variables_get"><field name="VAR">{positionVariable}</field></block></value></block><block type="position_getProperty_Number"><field name="PROP">Y</field><value name="POSITION"><block type="variables_get"><field name="VAR">{positionVariable}</field></block></value></block><block type="position_getProperty_Number"><field name="PROP">Z</field><value name="POSITION"><block type="variables_get"><field name="VAR">{positionVariable}</field></block></value></block><block type="position_getProperty_Number"><field name="PROP">AcquisitionTime</field><value name="POSITION"><block type="variables_get"><field name="VAR">{positionVariable}</field></block></value></block><block type="position_toDistanceUnit"><value name="POSITION"><block type="variables_get"><field name="VAR">{positionVariable}</field></block></value><value name="DISTANCE_UNIT"><shadow type="navigation_typedEnum_distanceUnit"></shadow></value></block><block type="position_toText"><value name="POSITION"><block type="variables_get"><field name="VAR">{positionVariable}</field></block></value></block><block type="position_create"></block><block type="position_create_withArgs"><value name="DISTANCE_UNIT"><shadow type="navigation_typedEnum_distanceUnit"></shadow></value><value name="X"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">30</field></shadow></value><value name="ACQUISITION_TIME"><shadow type="system_nanoTime"></shadow></value></block></category><category name="Quaternion"><block type="quaternion_getProperty_Number"><field name="PROP">W</field><value name="QUATERNION"><block type="variables_get"><field name="VAR">{quaternionVariable}</field></block></value></block><block type="quaternion_getProperty_Number"><field name="PROP">X</field><value name="QUATERNION"><block type="variables_get"><field name="VAR">{quaternionVariable}</field></block></value></block><block type="quaternion_getProperty_Number"><field name="PROP">Y</field><value name="QUATERNION"><block type="variables_get"><field name="VAR">{quaternionVariable}</field></block></value></block><block type="quaternion_getProperty_Number"><field name="PROP">Z</field><value name="QUATERNION"><block type="variables_get"><field name="VAR">{quaternionVariable}</field></block></value></block><block type="quaternion_getProperty_Number"><field name="PROP">AcquisitionTime</field><value name="QUATERNION"><block type="variables_get"><field name="VAR">{quaternionVariable}</field></block></value></block><block type="quaternion_normalized"><value name="QUATERNION"><block type="variables_get"><field name="VAR">{quaternionVariable}</field></block></value></block><block type="quaternion_congugate"><value name="QUATERNION"><block type="variables_get"><field name="VAR">{quaternionVariable}</field></block></value></block><block type="quaternion_create"></block><block type="quaternion_create_withArgs"><value name="W"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="X"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">30</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="ACQUISITION_TIME"><shadow type="system_nanoTime"></shadow></value></block></category><category name="Range"><block type="range_clip"><value name="MIN"><shadow type="math_number"><field name="NUM">-1</field></shadow></value><value name="MAX"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="range_scale"><value name="X1"><shadow type="math_number"><field name="NUM">-100</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">-1</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block></category><category name="Telemetry"><block type="telemetry_addNumericData_Number"><value name="KEY"><shadow type="text"><field name="TEXT">key</field></shadow></value><value name="NUMBER"><shadow type="math_number"><field name="NUM">123</field></shadow></value></block><block type="telemetry_addNumericData_Number"><value name="KEY"><shadow type="text"><field name="TEXT">key</field></shadow></value><value name="NUMBER"><block type="misc_roundDecimal"><value name="NUMBER"><shadow type="math_number"><field name="NUM">3.14159265</field></shadow></value><value name="PRECISION"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block></value></block><block type="telemetry_addTextData_All"><value name="KEY"><shadow type="text"><field name="TEXT">key</field></shadow></value><value name="TEXT"><shadow type="text"><field name="TEXT">text</field></shadow></value></block><block type="telemetry_addTextData_All"><value name="KEY"><shadow type="text"><field name="TEXT">key</field></shadow></value><value name="TEXT"><block type="misc_formatNumber"><value name="NUMBER"><shadow type="math_number"><field name="NUM">3.14159265</field></shadow></value><value name="PRECISION"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block></value></block><block type="telemetry_update"></block><block type="telemetry_speak"><value name="TEXT"><shadow type="text"><field name="TEXT">text</field></shadow></value></block><block type="telemetry_speak_withLanguage"><value name="TEXT"><shadow type="text"><field name="TEXT">text</field></shadow></value><value name="LANGUAGE_CODE"><shadow type="text"><field name="TEXT">en</field></shadow><block type="locale_languageCode"></block></value><value name="COUNTRY_CODE"><shadow type="text"><field name="TEXT">US</field></shadow><block type="locale_countryCode"></block></value></block></category><category name="Temperature"><block type="temperature_getProperty_TempUnit"><field name="PROP">TempUnit</field><value name="TEMPERATURE"><block type="variables_get"><field name="VAR">{temperatureVariable}</field></block></value></block><block type="temperature_getProperty_Number"><field name="PROP">Temperature</field><value name="TEMPERATURE"><block type="variables_get"><field name="VAR">{temperatureVariable}</field></block></value></block><block type="temperature_getProperty_Number"><field name="PROP">AcquisitionTime</field><value name="TEMPERATURE"><block type="variables_get"><field name="VAR">{temperatureVariable}</field></block></value></block><block type="temperature_create"></block><block type="temperature_create_withArgs"><value name="TEMP_UNIT"><shadow type="navigation_typedEnum_tempUnit"></shadow></value><value name="TEMPERATURE"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="ACQUISITION_TIME"><shadow type="system_nanoTime"></shadow></value></block><block type="temperature_toTempUnit"><value name="TEMPERATURE"><block type="variables_get"><field name="VAR">{temperatureVariable}</field></block></value><value name="TEMP_UNIT"><shadow type="navigation_typedEnum_tempUnit"></shadow></value></block></category><category name="TensorFlow Object Detection"><category name="Optimized for SKYSTONE"><block type="tfodSkyStone_initialize"><value name="MINIMUM_CONFIDENCE"><shadow type="math_number"><field name="NUM">0.4</field></shadow></value><value name="USE_OBJECT_TRACKER"><shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow></value><value name="ENABLE_CAMERA_MONITORING"><shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow></value></block><block type="tfodSkyStone_activate"></block><block type="tfodSkyStone_deactivate"></block><block type="tfodSkyStone_setClippingMargins"><value name="LEFT"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="TOP"><shadow type="math_number"><field name="NUM">200</field></shadow></value><value name="RIGHT"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="BOTTOM"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="tfodSkyStone_getRecognitions"></block></category><category name="Recognition"><block type="tfodRecognition_getProperty_String"><field name="PROP">Label</field><value name="TFOD_RECOGNITION"><block type="variables_get"><field name="VAR">{tfodRecognitionVariable}</field></block></value></block><block type="tfodSkyStone_typedEnum_label"><field name="LABEL">first element</field></block><block type="tfodSkyStone_typedEnum_label"><field name="LABEL">second element</field></block><block type="tfodRecognition_getProperty_Number"><field name="PROP">Confidence</field><value name="TFOD_RECOGNITION"><block type="variables_get"><field name="VAR">{tfodRecognitionVariable}</field></block></value></block><block type="tfodRecognition_getProperty_Number"><field name="PROP">Left</field><value name="TFOD_RECOGNITION"><block type="variables_get"><field name="VAR">{tfodRecognitionVariable}</field></block></value></block><block type="tfodRecognition_getProperty_Number"><field name="PROP">Right</field><value name="TFOD_RECOGNITION"><block type="variables_get"><field name="VAR">{tfodRecognitionVariable}</field></block></value></block><block type="tfodRecognition_getProperty_Number"><field name="PROP">Top</field><value name="TFOD_RECOGNITION"><block type="variables_get"><field name="VAR">{tfodRecognitionVariable}</field></block></value></block><block type="tfodRecognition_getProperty_Number"><field name="PROP">Bottom</field><value name="TFOD_RECOGNITION"><block type="variables_get"><field name="VAR">{tfodRecognitionVariable}</field></block></value></block><block type="tfodRecognition_getProperty_Number"><field name="PROP">Width</field><value name="TFOD_RECOGNITION"><block type="variables_get"><field name="VAR">{tfodRecognitionVariable}</field></block></value></block><block type="tfodRecognition_getProperty_Number"><field name="PROP">Height</field><value name="TFOD_RECOGNITION"><block type="variables_get"><field name="VAR">{tfodRecognitionVariable}</field></block></value></block><block type="tfodRecognition_getProperty_Number"><field name="PROP">ImageWidth</field><value name="TFOD_RECOGNITION"><block type="variables_get"><field name="VAR">{tfodRecognitionVariable}</field></block></value></block><block type="tfodRecognition_getProperty_Number"><field name="PROP">ImageHeight</field><value name="TFOD_RECOGNITION"><block type="variables_get"><field name="VAR">{tfodRecognitionVariable}</field></block></value></block><block type="tfodRecognition_toText"><value name="TFOD_RECOGNITION"><block type="variables_get"><field name="VAR">{tfodRecognitionVariable}</field></block></value></block><block type="tfodRecognition_estimateAngleToObject"><value name="TFOD_RECOGNITION"><block type="variables_get"><field name="VAR">{tfodRecognitionVariable}</field></block></value><value name="ANGLE_UNIT"><shadow type="navigation_typedEnum_angleUnit"></shadow></value></block></category></category><category name="Time"><block type="system_nanoTime"></block><category name="ElapsedTime"><block type="elapsedTime2_create"></block><block type="elapsedTime2_create_withStartTime"><value name="START_TIME"><shadow type="system_nanoTime"></shadow></value></block><block type="elapsedTime2_create_withResolution"><value name="RESOLUTION"><shadow type="elapsedTime2_typedEnum_resolution"></shadow></value></block><block type="elapsedTime2_getProperty_Number"><field name="PROP">StartTime</field><value name="ELAPSED_TIME"><block type="variables_get"><field name="VAR">{elapsedTimeVariable}</field></block></value></block><block type="elapsedTime2_getProperty_Number"><field name="PROP">Time</field><value name="ELAPSED_TIME"><block type="variables_get"><field name="VAR">{elapsedTimeVariable}</field></block></value></block><block type="elapsedTime2_getProperty_Number"><field name="PROP">Seconds</field><value name="ELAPSED_TIME"><block type="variables_get"><field name="VAR">{elapsedTimeVariable}</field></block></value></block><block type="elapsedTime2_getProperty_Number"><field name="PROP">Milliseconds</field><value name="ELAPSED_TIME"><block type="variables_get"><field name="VAR">{elapsedTimeVariable}</field></block></value></block><block type="elapsedTime2_getProperty_Resolution"><field name="PROP">Resolution</field><value name="ELAPSED_TIME"><block type="variables_get"><field name="VAR">{elapsedTimeVariable}</field></block></value></block><block type="elapsedTime2_reset"><value name="ELAPSED_TIME"><block type="variables_get"><field name="VAR">{elapsedTimeVariable}</field></block></value></block><block type="elapsedTime2_log"><value name="ELAPSED_TIME"><block type="variables_get"><field name="VAR">{elapsedTimeVariable}</field></block></value><value name="LABEL"><shadow type="text"><field name="TEXT">label</field></shadow></value></block><block type="elapsedTime2_toText"><value name="ELAPSED_TIME"><block type="variables_get"><field name="VAR">{elapsedTimeVariable}</field></block></value></block></category></category><category name="Vector"><block type="vectorF_getProperty_Number"><field name="PROP">Length</field><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="vectorF_getProperty_Number"><field name="PROP">Magnitude</field><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="vectorF_get"><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value><value name="INDEX"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="vectorF_put"><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value><value name="INDEX"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="VALUE"><shadow type="math_number"><field name="NUM">123</field></shadow></value></block><block type="vectorF_toText"><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="vectorF_normalized3D"><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="vectorF_dotProduct"><value name="VECTOR1"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value><value name="VECTOR2"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="vectorF_multiplied"><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="vectorF_added_withMatrix"><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="vectorF_added_withVector"><value name="VECTOR1"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value><value name="VECTOR2"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="vectorF_add_withVector"><value name="VECTOR1"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value><value name="VECTOR2"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="vectorF_subtracted_withMatrix"><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value><value name="MATRIX"><block type="variables_get"><field name="VAR">{matrixVariable}</field></block></value></block><block type="vectorF_subtracted_withVector"><value name="VECTOR1"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value><value name="VECTOR2"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="vectorF_subtract_withVector"><value name="VECTOR1"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value><value name="VECTOR2"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value></block><block type="vectorF_multiplied_withScale"><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value><value name="SCALE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="vectorF_multiply_withScale"><value name="VECTOR"><block type="variables_get"><field name="VAR">{vectorVariable}</field></block></value><value name="SCALE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="vectorF_create"><value name="LENGTH"><shadow type="math_number"><field name="NUM">4</field></shadow></value></block></category><category name="Velocity"><block type="velocity_getProperty_DistanceUnit"><field name="PROP">DistanceUnit</field><value name="VELOCITY"><block type="variables_get"><field name="VAR">{velocityVariable}</field></block></value></block><block type="velocity_getProperty_Number"><field name="PROP">XVeloc</field><value name="VELOCITY"><block type="variables_get"><field name="VAR">{velocityVariable}</field></block></value></block><block type="velocity_getProperty_Number"><field name="PROP">YVeloc</field><value name="VELOCITY"><block type="variables_get"><field name="VAR">{velocityVariable}</field></block></value></block><block type="velocity_getProperty_Number"><field name="PROP">ZVeloc</field><value name="VELOCITY"><block type="variables_get"><field name="VAR">{velocityVariable}</field></block></value></block><block type="velocity_getProperty_Number"><field name="PROP">AcquisitionTime</field><value name="VELOCITY"><block type="variables_get"><field name="VAR">{velocityVariable}</field></block></value></block><block type="velocity_toDistanceUnit"><value name="VELOCITY"><block type="variables_get"><field name="VAR">{velocityVariable}</field></block></value><value name="DISTANCE_UNIT"><shadow type="navigation_typedEnum_distanceUnit"></shadow></value></block><block type="velocity_toText"><value name="VELOCITY"><block type="variables_get"><field name="VAR">{velocityVariable}</field></block></value></block><block type="velocity_create"></block><block type="velocity_create_withArgs"><value name="DISTANCE_UNIT"><shadow type="navigation_typedEnum_distanceUnit"></shadow></value><value name="X_VELOC"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="Y_VELOC"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="Z_VELOC"><shadow type="math_number"><field name="NUM">30</field></shadow></value><value name="ACQUISITION_TIME"><shadow type="system_nanoTime"></shadow></value></block></category></category><sep></sep><!-- Logic is from blockly/demos/code/index.html, with some modification. --><category name="Logic" colour="210"><block type="controls_if"></block><block type="controls_if"><mutation else="1"></mutation></block><block type="controls_if"><mutation elseif="1" else="1"></mutation></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_null"></block><block type="logic_ternary"></block></category><!-- Loops is from blockly/demos/code/index.html --><category name="Loops" colour="120"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><!-- Math is from blockly/demos/code/index.html, with some modifications --><category name="Math" colour="230"><block type="math_number"></block><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_arithmetic"><field name="OP">POWER</field><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><field name="OP">NEG</field><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_single"><field name="OP">ABS</field><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_single"><field name="OP">ROOT</field><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="misc_atan2"><value name="Y"><shadow type="math_number"><field name="NUM">20</field></shadow></value><value name="X"><shadow type="math_number"><field name="NUM">20</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_on_list"></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><!-- Text is from blockly/demos/code/index.html, with some modifications --><category name="Text" colour="160"><block type="text"></block><block type="text_join"></block><block type="text_append"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="text_length"><value name="VALUE"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_isEmpty"><value name="VALUE"><shadow type="text"><field name="TEXT"></field></shadow></value></block><block type="text_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value><value name="FIND"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_charAt"><value name="VALUE"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value></block><block type="text_getSubstring"><value name="STRING"><block type="variables_get"><field name="VAR">{textVariable}</field></block></value></block><block type="text_changeCase"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block><block type="text_trim"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value></block></category><!-- Lists is from blockly/demos/code/index.html --><category name="Lists" colour="260"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="misc_addItemToList"><value name="LIST"><block type="variables_get"><field name="VAR">{listVariable}</field></block></value></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">{listVariable}</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">{listVariable}</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">{listVariable}</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">{listVariable}</field></block></value></block><block type="lists_split"><value name="DELIM"><shadow type="text"><field name="TEXT">,</field></shadow></value></block><block type="lists_sort"></block></category><!-- Variables is from blockly/demos/code/index.html --><category name="Variables" colour="330" custom="VARIABLE"></category><!-- Functions is from blockly/demos/code/index.html --><category name="Functions" colour="290" custom="PROCEDURE"></category><category name="Miscellaneous" colour="200"><block type="comment"><field name="COMMENT">Enter your comment here!</field></block><block type="misc_roundDecimal"><value name="NUMBER"><shadow type="math_number"><field name="NUM">3.14159265</field></shadow></value><value name="PRECISION"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block><block type="misc_formatNumber"><value name="NUMBER"><shadow type="math_number"><field name="NUM">3.14159265</field></shadow></value><value name="PRECISION"><shadow type="math_number"><field name="NUM">2</field></shadow></value></block><block type="misc_null"></block><block type="misc_isNull"></block><block type="misc_isNotNull"></block></category></xml>';
}

function isValidProjectName(projectName) {
  if (projectName) {
    return /^[a-zA-Z0-9 \!\#\$\%\&\'\(\)\+\,\-\.\;\=\@\[\]\^_\{\}\~]+$/.test(projectName);
  }
  return false;
}

function isValidSoundName(soundName) {
  if (soundName) {
    return /^[a-zA-Z0-9 \!\#\$\%\&\'\(\)\+\,\-\.\;\=\@\[\]\^_\{\}\~]+$/.test(soundName);
  }
  return false;
}

var BLINKIN_PATTERN_TOOLTIPS = [
  ['RAINBOW_RAINBOW_PALETTE', 'The BlinkinPattern value RAINBOW_RAINBOW_PALETTE.'],
  ['RAINBOW_PARTY_PALETTE', 'The BlinkinPattern value RAINBOW_PARTY_PALETTE.'],
  ['RAINBOW_OCEAN_PALETTE', 'The BlinkinPattern value RAINBOW_OCEAN_PALETTE.'],
  ['RAINBOW_LAVA_PALETTE', 'The BlinkinPattern value RAINBOW_LAVA_PALETTE.'],
  ['RAINBOW_FOREST_PALETTE', 'The BlinkinPattern value RAINBOW_FOREST_PALETTE.'],
  ['RAINBOW_WITH_GLITTER', 'The BlinkinPattern value RAINBOW_WITH_GLITTER.'],
  ['CONFETTI', 'The BlinkinPattern value CONFETTI.'],
  ['SHOT_RED', 'The BlinkinPattern value SHOT_RED.'],
  ['SHOT_BLUE', 'The BlinkinPattern value SHOT_BLUE.'],
  ['SHOT_WHITE', 'The BlinkinPattern value SHOT_WHITE.'],
  ['SINELON_RAINBOW_PALETTE', 'The BlinkinPattern value SINELON_RAINBOW_PALETTE.'],
  ['SINELON_PARTY_PALETTE', 'The BlinkinPattern value SINELON_PARTY_PALETTE.'],
  ['SINELON_OCEAN_PALETTE', 'The BlinkinPattern value SINELON_OCEAN_PALETTE.'],
  ['SINELON_LAVA_PALETTE', 'The BlinkinPattern value SINELON_LAVA_PALETTE.'],
  ['SINELON_FOREST_PALETTE', 'The BlinkinPattern value SINELON_FOREST_PALETTE.'],
  ['BEATS_PER_MINUTE_RAINBOW_PALETTE', 'The BlinkinPattern value BEATS_PER_MINUTE_RAINBOW_PALETTE.'],
  ['BEATS_PER_MINUTE_PARTY_PALETTE', 'The BlinkinPattern value BEATS_PER_MINUTE_PARTY_PALETTE.'],
  ['BEATS_PER_MINUTE_OCEAN_PALETTE', 'The BlinkinPattern value BEATS_PER_MINUTE_OCEAN_PALETTE.'],
  ['BEATS_PER_MINUTE_LAVA_PALETTE', 'The BlinkinPattern value BEATS_PER_MINUTE_LAVA_PALETTE.'],
  ['BEATS_PER_MINUTE_FOREST_PALETTE', 'The BlinkinPattern value BEATS_PER_MINUTE_FOREST_PALETTE.'],
  ['FIRE_MEDIUM', 'The BlinkinPattern value FIRE_MEDIUM.'],
  ['FIRE_LARGE', 'The BlinkinPattern value FIRE_LARGE.'],
  ['TWINKLES_RAINBOW_PALETTE', 'The BlinkinPattern value TWINKLES_RAINBOW_PALETTE.'],
  ['TWINKLES_PARTY_PALETTE', 'The BlinkinPattern value TWINKLES_PARTY_PALETTE.'],
  ['TWINKLES_OCEAN_PALETTE', 'The BlinkinPattern value TWINKLES_OCEAN_PALETTE.'],
  ['TWINKLES_LAVA_PALETTE', 'The BlinkinPattern value TWINKLES_LAVA_PALETTE.'],
  ['TWINKLES_FOREST_PALETTE', 'The BlinkinPattern value TWINKLES_FOREST_PALETTE.'],
  ['COLOR_WAVES_RAINBOW_PALETTE', 'The BlinkinPattern value COLOR_WAVES_RAINBOW_PALETTE.'],
  ['COLOR_WAVES_PARTY_PALETTE', 'The BlinkinPattern value COLOR_WAVES_PARTY_PALETTE.'],
  ['COLOR_WAVES_OCEAN_PALETTE', 'The BlinkinPattern value COLOR_WAVES_OCEAN_PALETTE.'],
  ['COLOR_WAVES_LAVA_PALETTE', 'The BlinkinPattern value COLOR_WAVES_LAVA_PALETTE.'],
  ['COLOR_WAVES_FOREST_PALETTE', 'The BlinkinPattern value COLOR_WAVES_FOREST_PALETTE.'],
  ['LARSON_SCANNER_RED', 'The BlinkinPattern value LARSON_SCANNER_RED.'],
  ['LARSON_SCANNER_GRAY', 'The BlinkinPattern value LARSON_SCANNER_GRAY.'],
  ['LIGHT_CHASE_RED', 'The BlinkinPattern value LIGHT_CHASE_RED.'],
  ['LIGHT_CHASE_BLUE', 'The BlinkinPattern value LIGHT_CHASE_BLUE.'],
  ['LIGHT_CHASE_GRAY', 'The BlinkinPattern value LIGHT_CHASE_GRAY.'],
  ['HEARTBEAT_RED', 'The BlinkinPattern value HEARTBEAT_RED.'],
  ['HEARTBEAT_BLUE', 'The BlinkinPattern value HEARTBEAT_BLUE.'],
  ['HEARTBEAT_WHITE', 'The BlinkinPattern value HEARTBEAT_WHITE.'],
  ['HEARTBEAT_GRAY', 'The BlinkinPattern value HEARTBEAT_GRAY.'],
  ['BREATH_RED', 'The BlinkinPattern value BREATH_RED.'],
  ['BREATH_BLUE', 'The BlinkinPattern value BREATH_BLUE.'],
  ['BREATH_GRAY', 'The BlinkinPattern value BREATH_GRAY.'],
  ['STROBE_RED', 'The BlinkinPattern value STROBE_RED.'],
  ['STROBE_BLUE', 'The BlinkinPattern value STROBE_BLUE.'],
  ['STROBE_GOLD', 'The BlinkinPattern value STROBE_GOLD.'],
  ['STROBE_WHITE', 'The BlinkinPattern value STROBE_WHITE.'],
  ['CP1_END_TO_END_BLEND_TO_BLACK', 'The BlinkinPattern value CP1_END_TO_END_BLEND_TO_BLACK.'],
  ['CP1_LARSON_SCANNER', 'The BlinkinPattern value CP1_LARSON_SCANNER.'],
  ['CP1_LIGHT_CHASE', 'The BlinkinPattern value CP1_LIGHT_CHASE.'],
  ['CP1_HEARTBEAT_SLOW', 'The BlinkinPattern value CP1_HEARTBEAT_SLOW.'],
  ['CP1_HEARTBEAT_MEDIUM', 'The BlinkinPattern value CP1_HEARTBEAT_MEDIUM.'],
  ['CP1_HEARTBEAT_FAST', 'The BlinkinPattern value CP1_HEARTBEAT_FAST.'],
  ['CP1_BREATH_SLOW', 'The BlinkinPattern value CP1_BREATH_SLOW.'],
  ['CP1_BREATH_FAST', 'The BlinkinPattern value CP1_BREATH_FAST.'],
  ['CP1_SHOT', 'The BlinkinPattern value CP1_SHOT.'],
  ['CP1_STROBE', 'The BlinkinPattern value CP1_STROBE.'],
  ['CP2_END_TO_END_BLEND_TO_BLACK', 'The BlinkinPattern value CP2_END_TO_END_BLEND_TO_BLACK.'],
  ['CP2_LARSON_SCANNER', 'The BlinkinPattern value CP2_LARSON_SCANNER.'],
  ['CP2_LIGHT_CHASE', 'The BlinkinPattern value CP2_LIGHT_CHASE.'],
  ['CP2_HEARTBEAT_SLOW', 'The BlinkinPattern value CP2_HEARTBEAT_SLOW.'],
  ['CP2_HEARTBEAT_MEDIUM', 'The BlinkinPattern value CP2_HEARTBEAT_MEDIUM.'],
  ['CP2_HEARTBEAT_FAST', 'The BlinkinPattern value CP2_HEARTBEAT_FAST.'],
  ['CP2_BREATH_SLOW', 'The BlinkinPattern value CP2_BREATH_SLOW.'],
  ['CP2_BREATH_FAST', 'The BlinkinPattern value CP2_BREATH_FAST.'],
  ['CP2_SHOT', 'The BlinkinPattern value CP2_SHOT.'],
  ['CP2_STROBE', 'The BlinkinPattern value CP2_STROBE.'],
  ['CP1_2_SPARKLE_1_ON_2', 'The BlinkinPattern value CP1_2_SPARKLE_1_ON_2.'],
  ['CP1_2_SPARKLE_2_ON_1', 'The BlinkinPattern value CP1_2_SPARKLE_2_ON_1.'],
  ['CP1_2_COLOR_GRADIENT', 'The BlinkinPattern value CP1_2_COLOR_GRADIENT.'],
  ['CP1_2_BEATS_PER_MINUTE', 'The BlinkinPattern value CP1_2_BEATS_PER_MINUTE.'],
  ['CP1_2_END_TO_END_BLEND_1_TO_2', 'The BlinkinPattern value CP1_2_END_TO_END_BLEND_1_TO_2.'],
  ['CP1_2_END_TO_END_BLEND', 'The BlinkinPattern value CP1_2_END_TO_END_BLEND.'],
  ['CP1_2_NO_BLENDING', 'The BlinkinPattern value CP1_2_NO_BLENDING.'],
  ['CP1_2_TWINKLES', 'The BlinkinPattern value CP1_2_TWINKLES.'],
  ['CP1_2_COLOR_WAVES', 'The BlinkinPattern value CP1_2_COLOR_WAVES.'],
  ['CP1_2_SINELON', 'The BlinkinPattern value CP1_2_SINELON.'],
  ['HOT_PINK', 'The BlinkinPattern value HOT_PINK.'],
  ['DARK_RED', 'The BlinkinPattern value DARK_RED.'],
  ['RED', 'The BlinkinPattern value RED.'],
  ['RED_ORANGE', 'The BlinkinPattern value RED_ORANGE.'],
  ['ORANGE', 'The BlinkinPattern value ORANGE.'],
  ['GOLD', 'The BlinkinPattern value GOLD.'],
  ['YELLOW', 'The BlinkinPattern value YELLOW.'],
  ['LAWN_GREEN', 'The BlinkinPattern value LAWN_GREEN.'],
  ['LIME', 'The BlinkinPattern value LIME.'],
  ['DARK_GREEN', 'The BlinkinPattern value DARK_GREEN.'],
  ['GREEN', 'The BlinkinPattern value GREEN.'],
  ['BLUE_GREEN', 'The BlinkinPattern value BLUE_GREEN.'],
  ['AQUA', 'The BlinkinPattern value AQUA.'],
  ['SKY_BLUE', 'The BlinkinPattern value SKY_BLUE.'],
  ['DARK_BLUE', 'The BlinkinPattern value DARK_BLUE.'],
  ['BLUE', 'The BlinkinPattern value BLUE.'],
  ['BLUE_VIOLET', 'The BlinkinPattern value BLUE_VIOLET.'],
  ['VIOLET', 'The BlinkinPattern value VIOLET.'],
  ['WHITE', 'The BlinkinPattern value WHITE.'],
  ['GRAY', 'The BlinkinPattern value GRAY.'],
  ['DARK_GRAY', 'The BlinkinPattern value DARK_GRAY.'],
];

var BLINKIN_PATTERN_FROM_TEXT_TOOLTIP =
    'Returns the pattern associated with the given text. Valid input is ' +
    'RAINBOW_RAINBOW_PALETTE, ' +
    'RAINBOW_PARTY_PALETTE, ' +
    'RAINBOW_OCEAN_PALETTE, ' +
    'RAINBOW_LAVA_PALETTE, ' +
    'RAINBOW_FOREST_PALETTE, ' +
    'RAINBOW_WITH_GLITTER, ' +
    'CONFETTI, ' +
    'SHOT_RED, ' +
    'SHOT_BLUE, ' +
    'SHOT_WHITE, ' +
    'SINELON_RAINBOW_PALETTE, ' +
    'SINELON_PARTY_PALETTE, ' +
    'SINELON_OCEAN_PALETTE, ' +
    'SINELON_LAVA_PALETTE, ' +
    'SINELON_FOREST_PALETTE, ' +
    'BEATS_PER_MINUTE_RAINBOW_PALETTE, ' +
    'BEATS_PER_MINUTE_PARTY_PALETTE, ' +
    'BEATS_PER_MINUTE_OCEAN_PALETTE, ' +
    'BEATS_PER_MINUTE_LAVA_PALETTE, ' +
    'BEATS_PER_MINUTE_FOREST_PALETTE, ' +
    'FIRE_MEDIUM, ' +
    'FIRE_LARGE, ' +
    'TWINKLES_RAINBOW_PALETTE, ' +
    'TWINKLES_PARTY_PALETTE, ' +
    'TWINKLES_OCEAN_PALETTE, ' +
    'TWINKLES_LAVA_PALETTE, ' +
    'TWINKLES_FOREST_PALETTE, ' +
    'COLOR_WAVES_RAINBOW_PALETTE, ' +
    'COLOR_WAVES_PARTY_PALETTE, ' +
    'COLOR_WAVES_OCEAN_PALETTE, ' +
    'COLOR_WAVES_LAVA_PALETTE, ' +
    'COLOR_WAVES_FOREST_PALETTE, ' +
    'LARSON_SCANNER_RED, ' +
    'LARSON_SCANNER_GRAY, ' +
    'LIGHT_CHASE_RED, ' +
    'LIGHT_CHASE_BLUE, ' +
    'LIGHT_CHASE_GRAY, ' +
    'HEARTBEAT_RED, ' +
    'HEARTBEAT_BLUE, ' +
    'HEARTBEAT_WHITE, ' +
    'HEARTBEAT_GRAY, ' +
    'BREATH_RED, ' +
    'BREATH_BLUE, ' +
    'BREATH_GRAY, ' +
    'STROBE_RED, ' +
    'STROBE_BLUE, ' +
    'STROBE_GOLD, ' +
    'STROBE_WHITE, ' +
    'CP1_END_TO_END_BLEND_TO_BLACK, ' +
    'CP1_LARSON_SCANNER, ' +
    'CP1_LIGHT_CHASE, ' +
    'CP1_HEARTBEAT_SLOW, ' +
    'CP1_HEARTBEAT_MEDIUM, ' +
    'CP1_HEARTBEAT_FAST, ' +
    'CP1_BREATH_SLOW, ' +
    'CP1_BREATH_FAST, ' +
    'CP1_SHOT, ' +
    'CP1_STROBE, ' +
    'CP2_END_TO_END_BLEND_TO_BLACK, ' +
    'CP2_LARSON_SCANNER, ' +
    'CP2_LIGHT_CHASE, ' +
    'CP2_HEARTBEAT_SLOW, ' +
    'CP2_HEARTBEAT_MEDIUM, ' +
    'CP2_HEARTBEAT_FAST, ' +
    'CP2_BREATH_SLOW, ' +
    'CP2_BREATH_FAST, ' +
    'CP2_SHOT, ' +
    'CP2_STROBE, ' +
    'CP1_2_SPARKLE_1_ON_2, ' +
    'CP1_2_SPARKLE_2_ON_1, ' +
    'CP1_2_COLOR_GRADIENT, ' +
    'CP1_2_BEATS_PER_MINUTE, ' +
    'CP1_2_END_TO_END_BLEND_1_TO_2, ' +
    'CP1_2_END_TO_END_BLEND, ' +
    'CP1_2_NO_BLENDING, ' +
    'CP1_2_TWINKLES, ' +
    'CP1_2_COLOR_WAVES, ' +
    'CP1_2_SINELON, ' +
    'HOT_PINK, ' +
    'DARK_RED, ' +
    'RED, ' +
    'RED_ORANGE, ' +
    'ORANGE, ' +
    'GOLD, ' +
    'YELLOW, ' +
    'LAWN_GREEN, ' +
    'LIME, ' +
    'DARK_GREEN, ' +
    'GREEN, ' +
    'BLUE_GREEN, ' +
    'AQUA, ' +
    'SKY_BLUE, ' +
    'DARK_BLUE, ' +
    'BLUE, ' +
    'BLUE_VIOLET, ' +
    'VIOLET, ' +
    'WHITE, ' +
    'GRAY, ' +
    'DARK_GRAY, ' +
    'or BLACK.';

function createLanguageCodeDropdown() {
  var CHOICES = [
      ['en', 'en'],
  ];
  return createFieldDropdown(CHOICES);
}

var LANGUAGE_CODE_TOOLTIPS = [
  ['en', 'The language code for English.'],
];

function createCountryCodeDropdown() {
  var CHOICES = [
      ['US', 'US'],
  ];
  return createFieldDropdown(CHOICES);
}

var COUNTRY_CODE_TOOLTIPS = [
  ['US', 'The country code for United States.'],
];

function createSkyStoneSoundResourceDropdown() {
  var CHOICES = [
      ['ss_alarm', 'ss_alarm'],
      ['ss_bb8_down', 'ss_bb8_down'],
      ['ss_bb8_up', 'ss_bb8_up'],
      ['ss_darth_vader', 'ss_darth_vader'],
      ['ss_fly_by', 'ss_fly_by'],
      ['ss_laser', 'ss_laser'],
      ['ss_laser_burst', 'ss_laser_burst'],
      ['ss_light_saber', 'ss_light_saber'],
      ['ss_light_saber_long', 'ss_light_saber_long'],
      ['ss_light_saber_short', 'ss_light_saber_short'],
      ['ss_light_speed', 'ss_light_speed'],
      ['ss_mf_fail', 'ss_mf_fail'],
      ['ss_mine', 'ss_mine'],
      ['ss_power_up', 'ss_power_up'],
      ['ss_r2d2_up', 'ss_r2d2_up'],
      ['ss_roger_roger', 'ss_roger_roger'],
      ['ss_siren', 'ss_siren'],
      ['ss_wookie', 'ss_wookie'],
  ];
  return createFieldDropdown(CHOICES);
}

var SKY_STONE_SOUND_RESOURCE_TOOLTIPS = [
  ['ss_alarm', 'The SoundResource value ss_alarm.'],
  ['ss_bb8_down', 'The SoundResource value ss_bb8_down.'],
  ['ss_bb8_up', 'The SoundResource value ss_bb8_up.'],
  ['ss_darth_vader', 'The SoundResource value ss_darth_vader.'],
  ['ss_fly_by', 'The SoundResource value ss_fly_by.'],
  ['ss_laser', 'The SoundResource value ss_laser.'],
  ['ss_laser_burst', 'The SoundResource value ss_laser_burst.'],
  ['ss_light_saber', 'The SoundResource value ss_light_saber.'],
  ['ss_light_saber_long', 'The SoundResource value ss_light_saber_long.'],
  ['ss_light_saber_short', 'The SoundResource value ss_light_saber_short.'],
  ['ss_light_speed', 'The SoundResource value ss_light_speed.'],
  ['ss_mf_fail', 'The SoundResource value ss_mf_fail.'],
  ['ss_mine', 'The SoundResource value ss_mine.'],
  ['ss_power_up', 'The SoundResource value ss_power_up.'],
  ['ss_r2d2_up', 'The SoundResource value ss_r2d2_up.'],
  ['ss_roger_roger', 'The SoundResource value ss_roger_roger.'],
  ['ss_siren', 'The SoundResource value ss_siren.'],
  ['ss_wookie', 'The SoundResource value ss_wookie.'],
];

var androidSoundPoolRawResPrefix = 'RawRes:';
var accelerationIdentifierForJavaScript = 'accelerationAccess';
var androidAccelerometerIdentifierForJavaScript = 'androidAccelerometerAccess';
var androidAccelerometerIdentifierForFtcJava = 'androidAccelerometer';
var androidGyroscopeIdentifierForJavaScript = 'androidGyroscopeAccess';
var androidGyroscopeIdentifierForFtcJava = 'androidGyroscope';
var androidOrientationIdentifierForJavaScript = 'androidOrientationAccess';
var androidOrientationIdentifierForFtcJava = 'androidOrientation';
var androidSoundPoolIdentifierForJavaScript = 'androidSoundPoolAccess';
var androidSoundPoolIdentifierForFtcJava = 'androidSoundPool';
var androidTextToSpeechIdentifierForJavaScript = 'androidTextToSpeechAccess';
var androidTextToSpeechIdentifierForFtcJava = 'androidTextToSpeech';
var angularVelocityIdentifierForJavaScript = 'angularVelocityAccess';
var blinkinPatternIdentifierForJavaScript = 'blinkinPatternAccess';
var bno055imuParametersIdentifierForJavaScript = 'bno055imuParametersAccess';
var colorIdentifierForJavaScript = 'colorAccess';
var dbgLogIdentifierForJavaScript = 'dbgLogAccess';
var elapsedTimeIdentifierForJavaScript = 'elapsedTimeAccess';
var linearOpModeIdentifierForJavaScript = 'linearOpMode';
var magneticFluxIdentifierForJavaScript = 'magneticFluxAccess';
var matrixFIdentifierForJavaScript = 'matrixFAccess';
var miscIdentifierForJavaScript = 'miscAccess';
var navigationIdentifierForJavaScript = 'navigationAccess';
var openGLMatrixIdentifierForJavaScript = 'openGLMatrixAccess';
var orientationIdentifierForJavaScript = 'orientationAccess';
var pidfCoefficientsIdentifierForJavaScript = 'pidfCoefficientsAccess';
var positionIdentifierForJavaScript = 'positionAccess';
var quaternionIdentifierForJavaScript = 'quaternionAccess';
var rangeIdentifierForJavaScript = 'rangeAccess';
var systemIdentifierForJavaScript = 'systemAccess';
var telemetryIdentifierForJavaScript = 'telemetry';
var temperatureIdentifierForJavaScript = 'temperatureAccess';
var tfodRoverRuckusIdentifierForJavaScript = 'tfodRoverRuckusAccess';
var tfodRoverRuckusIdentifierForFtcJava = 'tfodRoverRuckus';
var tfodSkyStoneIdentifierForJavaScript = 'tfodSkyStoneAccess';
var tfodSkyStoneIdentifierForFtcJava = 'tfodSkyStone';
var vectorFIdentifierForJavaScript = 'vectorFAccess';
var velocityIdentifierForJavaScript = 'velocityAccess';
var vuforiaIdentifierForJavaScript = 'vuforiaAccess';
var vuforiaRelicRecoveryIdentifierForFtcJava = 'vuforiaRelicRecovery';
var vuforiaRoverRuckusIdentifierForJavaScript = 'vuforiaRoverRuckusAccess';
var vuforiaRoverRuckusIdentifierForFtcJava = 'vuforiaRoverRuckus';
var vuforiaSkyStoneIdentifierForJavaScript = 'vuforiaSkyStoneAccess';
var vuforiaSkyStoneIdentifierForFtcJava = 'vuforiaSkyStone';
var vuforiaLocalizerIdentifierForJavaScript = 'vuforiaLocalizerAccess';
var vuforiaLocalizerParametersIdentifierForJavaScript = 'vuforiaLocalizerParametersAccess';
var vuforiaTrackableIdentifierForJavaScript = 'vuforiaTrackableAccess';
var vuforiaTrackableDefaultListenerIdentifierForJavaScript = 'vuforiaTrackableDefaultListenerAccess';
var vuforiaTrackablesIdentifierForJavaScript = 'vuforiaTrackablesAccess';

function createWebcamDeviceNameDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createRoverRuckusTfodLabelDropdown() {
  var CHOICES = [
      ['Gold Mineral', 'Gold Mineral'],
      ['Silver Mineral', 'Silver Mineral'],
  ];
  return createFieldDropdown(CHOICES);
}

var ROVER_RUCKUS_TFOD_LABEL_TOOLTIPS = [
  ['Gold Mineral', 'The Label value Gold Mineral.'],
  ['Silver Mineral', 'The Label value Silver Mineral.'],
];

function createRoverRuckusTrackableNameDropdown() {
  var CHOICES = [
      ['BluePerimeter', 'BluePerimeter'],
      ['RedPerimeter', 'RedPerimeter'],
      ['FrontPerimeter', 'FrontPerimeter'],
      ['BackPerimeter', 'BackPerimeter'],
  ];
  return createFieldDropdown(CHOICES);
}

var ROVER_RUCKUS_TRACKABLE_NAME_TOOLTIPS = [
  ['BluePerimeter', 'The TrackableName value BluePerimeter.'],
  ['RedPerimeter', 'The TrackableName value RedPerimeter.'],
  ['FrontPerimeter', 'The TrackableName value FrontPerimeter.'],
  ['BackPerimeter', 'The TrackableName value BackPerimeter.'],
];

function createSkyStoneTfodLabelDropdown() {
  var CHOICES = [
      ['Stone', 'Stone'],
      ['Skystone', 'Skystone'],
  ];
  return createFieldDropdown(CHOICES);
}

var SKY_STONE_TFOD_LABEL_TOOLTIPS = [
  ['Stone', 'The Label value Stone.'],
  ['Skystone', 'The Label value Skystone.'],
];

function createSkyStoneTrackableNameDropdown() {
  var CHOICES = [
      ['Stone Target', 'Stone Target'],
      ['Blue Rear Bridge', 'Blue Rear Bridge'],
      ['Red Rear Bridge', 'Red Rear Bridge'],
      ['Red Front Bridge', 'Red Front Bridge'],
      ['Blue Front Bridge', 'Blue Front Bridge'],
      ['Red Perimeter 1', 'Red Perimeter 1'],
      ['Red Perimeter 2', 'Red Perimeter 2'],
      ['Front Perimeter 1', 'Front Perimeter 1'],
      ['Front Perimeter 2', 'Front Perimeter 2'],
      ['Blue Perimeter 1', 'Blue Perimeter 1'],
      ['Blue Perimeter 2', 'Blue Perimeter 2'],
      ['Rear Perimeter 1', 'Rear Perimeter 1'],
      ['Rear Perimeter 2', 'Rear Perimeter 2'],
  ];
  return createFieldDropdown(CHOICES);
}

var SKY_STONE_TRACKABLE_NAME_TOOLTIPS = [
  ['Stone Target', 'The TrackableName value Stone Target.'],
  ['Blue Rear Bridge', 'The TrackableName value Blue Rear Bridge.'],
  ['Red Rear Bridge', 'The TrackableName value Red Rear Bridge.'],
  ['Red Front Bridge', 'The TrackableName value Red Front Bridge.'],
  ['Blue Front Bridge', 'The TrackableName value Blue Front Bridge.'],
  ['Red Perimeter 1', 'The TrackableName value Red Perimeter 1.'],
  ['Red Perimeter 2', 'The TrackableName value Red Perimeter 2.'],
  ['Front Perimeter 1', 'The TrackableName value Front Perimeter 1.'],
  ['Front Perimeter 2', 'The TrackableName value Front Perimeter 2.'],
  ['Blue Perimeter 1', 'The TrackableName value Blue Perimeter 1.'],
  ['Blue Perimeter 2', 'The TrackableName value Blue Perimeter 2.'],
  ['Rear Perimeter 1', 'The TrackableName value Rear Perimeter 1.'],
  ['Rear Perimeter 2', 'The TrackableName value Rear Perimeter 2.'],
];

function createAccelerationSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createAnalogInputDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createAnalogOutputDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createBNO055IMUDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createColorSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createCompassSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createCRServoDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createDcMotorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createDcMotorExDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createDigitalChannelDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createDistanceSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createGyroSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createIrSeekerSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createLedDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createLightSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createLynxI2cColorRangeSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createMrI2cCompassSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createMrI2cRangeSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createOpticalDistanceSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createRevBlinkinLedDriverDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createServoDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createServoControllerDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createTouchSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createUltrasonicSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createVoltageSensorDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function createWebcamNameDropdown() {
  var CHOICES = [
  ];
  return createFieldDropdown(CHOICES);
}

function getHardwareIdentifierSuffixes() {
  var suffixes = [
    'AsAccelerationSensor',
    'AsAnalogInput',
    'AsAnalogOutput',
    'AsBNO055IMU',
    'AsColorSensor',
    'AsCompassSensor',
    'AsCRServo',
    'AsDcMotor',
    'AsDigitalChannel',
    'AsDistanceSensor',
    'AsGyroSensor',
    'AsIrSeekerSensor',
    'AsLED',
    'AsLightSensor',
    'AsREVModule',
    'AsREVColorRangeSensor',
    'AsMrI2cCompassSensor',
    'AsMrI2cRangeSensor',
    'AsOpticalDistanceSensor',
    'AsRevBlinkinLedDriver',
    'AsServo',
    'AsServoController',
    'AsTouchSensor',
    'AsUltrasonicSensor',
    'AsVoltageSensor',
    'AsWebcamName',
  ];
  return suffixes;
}

function addReservedWordsForJavaScript() {
  Blockly.JavaScript.addReservedWords('callRunOpMode');
  Blockly.JavaScript.addReservedWords('accelerationAccess');
  Blockly.JavaScript.addReservedWords('androidAccelerometerAccess');
  Blockly.JavaScript.addReservedWords('androidGyroscopeAccess');
  Blockly.JavaScript.addReservedWords('androidOrientationAccess');
  Blockly.JavaScript.addReservedWords('androidSoundPoolAccess');
  Blockly.JavaScript.addReservedWords('androidTextToSpeechAccess');
  Blockly.JavaScript.addReservedWords('angularVelocityAccess');
  Blockly.JavaScript.addReservedWords('blinkinPatternAccess');
  Blockly.JavaScript.addReservedWords('blocksOpMode');
  Blockly.JavaScript.addReservedWords('bno055imuParametersAccess');
  Blockly.JavaScript.addReservedWords('colorAccess');
  Blockly.JavaScript.addReservedWords('dbgLogAccess');
  Blockly.JavaScript.addReservedWords('elapsedTimeAccess');
  Blockly.JavaScript.addReservedWords('gamepad1');
  Blockly.JavaScript.addReservedWords('gamepad2');
  Blockly.JavaScript.addReservedWords('linearOpMode');
  Blockly.JavaScript.addReservedWords('magneticFluxAccess');
  Blockly.JavaScript.addReservedWords('matrixFAccess');
  Blockly.JavaScript.addReservedWords('miscAccess');
  Blockly.JavaScript.addReservedWords('navigationAccess');
  Blockly.JavaScript.addReservedWords('openGLMatrixAccess');
  Blockly.JavaScript.addReservedWords('orientationAccess');
  Blockly.JavaScript.addReservedWords('pidfCoefficientsAccess');
  Blockly.JavaScript.addReservedWords('positionAccess');
  Blockly.JavaScript.addReservedWords('quaternionAccess');
  Blockly.JavaScript.addReservedWords('rangeAccess');
  Blockly.JavaScript.addReservedWords('systemAccess');
  Blockly.JavaScript.addReservedWords('telemetry');
  Blockly.JavaScript.addReservedWords('temperatureAccess');
  Blockly.JavaScript.addReservedWords('tfodRoverRuckusAccess');
  Blockly.JavaScript.addReservedWords('tfodSkyStoneAccess');
  Blockly.JavaScript.addReservedWords('vectorFAccess');
  Blockly.JavaScript.addReservedWords('velocityAccess');
  Blockly.JavaScript.addReservedWords('vuforiaAccess');
  Blockly.JavaScript.addReservedWords('vuforiaLocalizerAccess');
  Blockly.JavaScript.addReservedWords('vuforiaLocalizerParametersAccess');
  Blockly.JavaScript.addReservedWords('vuforiaRoverRuckusAccess');
  Blockly.JavaScript.addReservedWords('vuforiaSkyStoneAccess');
  Blockly.JavaScript.addReservedWords('vuforiaTrackableAccess');
  Blockly.JavaScript.addReservedWords('vuforiaTrackableDefaultListenerAccess');
  Blockly.JavaScript.addReservedWords('vuforiaTrackablesAccess');
}

function getHardwareItemDeviceName(identifier) {
  switch (identifier) {
  }
  throw 'Unexpected identifier (' + identifier + ').';
}

function getIdentifierForFtcJava(identifier) {
  switch (identifier) {
  }
  throw 'Unexpected identifier (' + identifier + ').';
}

function addReservedWordsForFtcJava() {
  Blockly.FtcJava.addReservedWords('SecurityException');
  Blockly.FtcJava.addReservedWords('VuforiaTrackable');
  Blockly.FtcJava.addReservedWords('sleep');
  Blockly.FtcJava.addReservedWords('updateTelemetry');
  Blockly.FtcJava.addReservedWords('MotorControlAlgorithm');
  Blockly.FtcJava.addReservedWords('AccelerationSensor');
  Blockly.FtcJava.addReservedWords('byte');
  Blockly.FtcJava.addReservedWords('IncompatibleClassChangeError');
  Blockly.FtcJava.addReservedWords('RuntimeException');
  Blockly.FtcJava.addReservedWords('synchronized');
  Blockly.FtcJava.addReservedWords('UnsupportedClassVersionError');
  Blockly.FtcJava.addReservedWords('goto');
  Blockly.FtcJava.addReservedWords('ClassValue');
  Blockly.FtcJava.addReservedWords('LinearOpMode');
  Blockly.FtcJava.addReservedWords('RelicRecoveryVuMark');
  Blockly.FtcJava.addReservedWords('AxesOrder');
  Blockly.FtcJava.addReservedWords('ServoController');
  Blockly.FtcJava.addReservedWords('for');
  Blockly.FtcJava.addReservedWords('StackOverflowError');
  Blockly.FtcJava.addReservedWords('waitForNextHardwareCycle');
  Blockly.FtcJava.addReservedWords('GyroSensor');
  Blockly.FtcJava.addReservedWords('LED');
  Blockly.FtcJava.addReservedWords('continue');
  Blockly.FtcJava.addReservedWords('Runnable');
  Blockly.FtcJava.addReservedWords('ReflectiveOperationException');
  Blockly.FtcJava.addReservedWords('handleLoop');
  Blockly.FtcJava.addReservedWords('Math');
  Blockly.FtcJava.addReservedWords('Character.Subset');
  Blockly.FtcJava.addReservedWords('AppUtil');
  Blockly.FtcJava.addReservedWords('IllegalAccessError');
  Blockly.FtcJava.addReservedWords('DigitalChannel');
  Blockly.FtcJava.addReservedWords('msStuckDetectStart');
  Blockly.FtcJava.addReservedWords('AngularVelocity');
  Blockly.FtcJava.addReservedWords('case');
  Blockly.FtcJava.addReservedWords('AndroidAccelerometer');
  Blockly.FtcJava.addReservedWords('abstract');
  Blockly.FtcJava.addReservedWords('ThreadLocal');
  Blockly.FtcJava.addReservedWords('Temperature');
  Blockly.FtcJava.addReservedWords('transient');
  Blockly.FtcJava.addReservedWords('final');
  Blockly.FtcJava.addReservedWords('I2cAddr');
  Blockly.FtcJava.addReservedWords('implements');
  Blockly.FtcJava.addReservedWords('throw');
  Blockly.FtcJava.addReservedWords('msStuckDetectLoop');
  Blockly.FtcJava.addReservedWords('ClassNotFoundException');
  Blockly.FtcJava.addReservedWords('Collections');
  Blockly.FtcJava.addReservedWords('StrictMath');
  Blockly.FtcJava.addReservedWords('NoSuchMethodError');
  Blockly.FtcJava.addReservedWords('char');
  Blockly.FtcJava.addReservedWords('SafeVarargs');
  Blockly.FtcJava.addReservedWords('ArrayIndexOutOfBoundsException');
  Blockly.FtcJava.addReservedWords('AnalogInput');
  Blockly.FtcJava.addReservedWords('msStuckDetectStop');
  Blockly.FtcJava.addReservedWords('System');
  Blockly.FtcJava.addReservedWords('BootstrapMethodError');
  Blockly.FtcJava.addReservedWords('VuforiaRoverRuckus');
  Blockly.FtcJava.addReservedWords('ColorSensor');
  Blockly.FtcJava.addReservedWords('Double');
  Blockly.FtcJava.addReservedWords('getRuntime');
  Blockly.FtcJava.addReservedWords('DcMotorSimple');
  Blockly.FtcJava.addReservedWords('IllegalAccessException');
  Blockly.FtcJava.addReservedWords('UnknownError');
  Blockly.FtcJava.addReservedWords('CloneNotSupportedException');
  Blockly.FtcJava.addReservedWords('Autonomous');
  Blockly.FtcJava.addReservedWords('TfodBase');
  Blockly.FtcJava.addReservedWords('Quaternion');
  Blockly.FtcJava.addReservedWords('init_loop');
  Blockly.FtcJava.addReservedWords('DcMotorEx');
  Blockly.FtcJava.addReservedWords('NegativeArraySizeException');
  Blockly.FtcJava.addReservedWords('Appendable');
  Blockly.FtcJava.addReservedWords('ClassCircularityError');
  Blockly.FtcJava.addReservedWords('Deprecated');
  Blockly.FtcJava.addReservedWords('float');
  Blockly.FtcJava.addReservedWords('boolean');
  Blockly.FtcJava.addReservedWords('Position');
  Blockly.FtcJava.addReservedWords('SecurityManager');
  Blockly.FtcJava.addReservedWords('ModernRoboticsI2cGyro');
  Blockly.FtcJava.addReservedWords('List');
  Blockly.FtcJava.addReservedWords('OutOfMemoryError');
  Blockly.FtcJava.addReservedWords('waitForStart');
  Blockly.FtcJava.addReservedWords('EnumConstantNotPresentException');
  Blockly.FtcJava.addReservedWords('RevBlinkinLedDriver');
  Blockly.FtcJava.addReservedWords('VuforiaTrackableDefaultListener');
  Blockly.FtcJava.addReservedWords('ArrayStoreException');
  Blockly.FtcJava.addReservedWords('ClassCastException');
  Blockly.FtcJava.addReservedWords('this');
  Blockly.FtcJava.addReservedWords('CRServo');
  Blockly.FtcJava.addReservedWords('Short');
  Blockly.FtcJava.addReservedWords('start');
  Blockly.FtcJava.addReservedWords('Integer');
  Blockly.FtcJava.addReservedWords('RuntimePermission');
  Blockly.FtcJava.addReservedWords('opModeIsActive');
  Blockly.FtcJava.addReservedWords('Number');
  Blockly.FtcJava.addReservedWords('Character');
  Blockly.FtcJava.addReservedWords('public');
  Blockly.FtcJava.addReservedWords('gamepad2');
  Blockly.FtcJava.addReservedWords('PWMOutput');
  Blockly.FtcJava.addReservedWords('AxesReference');
  Blockly.FtcJava.addReservedWords('VoltageSensor');
  Blockly.FtcJava.addReservedWords('internalPostLoop');
  Blockly.FtcJava.addReservedWords('OpMode');
  Blockly.FtcJava.addReservedWords('PIDFCoefficients');
  Blockly.FtcJava.addReservedWords('catch');
  Blockly.FtcJava.addReservedWords('OrientationSensor');
  Blockly.FtcJava.addReservedWords('IrSeekerSensor');
  Blockly.FtcJava.addReservedWords('Light');
  Blockly.FtcJava.addReservedWords('break');
  Blockly.FtcJava.addReservedWords('assert');
  Blockly.FtcJava.addReservedWords('Character.UnicodeBlock');
  Blockly.FtcJava.addReservedWords('ClassFactory');
  Blockly.FtcJava.addReservedWords('UnsupportedOperationException');
  Blockly.FtcJava.addReservedWords('strictfp');
  Blockly.FtcJava.addReservedWords('switch');
  Blockly.FtcJava.addReservedWords('UnnormalizedAngleUnit');
  Blockly.FtcJava.addReservedWords('AndroidSoundPool');
  Blockly.FtcJava.addReservedWords('init');
  Blockly.FtcJava.addReservedWords('isStarted');
  Blockly.FtcJava.addReservedWords('ClassFormatError');
  Blockly.FtcJava.addReservedWords('FunctionalInterface');
  Blockly.FtcJava.addReservedWords('Readable');
  Blockly.FtcJava.addReservedWords('Compiler');
  Blockly.FtcJava.addReservedWords('requestOpModeStop');
  Blockly.FtcJava.addReservedWords('default');
  Blockly.FtcJava.addReservedWords('ProcessBuilder');
  Blockly.FtcJava.addReservedWords('OpenGLMatrix');
  Blockly.FtcJava.addReservedWords('finally');
  Blockly.FtcJava.addReservedWords('ReadWriteFile');
  Blockly.FtcJava.addReservedWords('package');
  Blockly.FtcJava.addReservedWords('AngleUnit');
  Blockly.FtcJava.addReservedWords('Exception');
  Blockly.FtcJava.addReservedWords('VuforiaRelicRecovery');
  Blockly.FtcJava.addReservedWords('instanceof');
  Blockly.FtcJava.addReservedWords('String');
  Blockly.FtcJava.addReservedWords('IndexOutOfBoundsException');
  Blockly.FtcJava.addReservedWords('NoSuchMethodException');
  Blockly.FtcJava.addReservedWords('NormalizedColorSensor');
  Blockly.FtcJava.addReservedWords('Iterable');
  Blockly.FtcJava.addReservedWords('VuforiaTrackables');
  Blockly.FtcJava.addReservedWords('volatile');
  Blockly.FtcJava.addReservedWords('AutoCloseable');
  Blockly.FtcJava.addReservedWords('Byte');
  Blockly.FtcJava.addReservedWords('StringIndexOutOfBoundsException');
  Blockly.FtcJava.addReservedWords('Range');
  Blockly.FtcJava.addReservedWords('TeleOp');
  Blockly.FtcJava.addReservedWords('Disabled');
  Blockly.FtcJava.addReservedWords('isStopRequested');
  Blockly.FtcJava.addReservedWords('JavaUtil');
  Blockly.FtcJava.addReservedWords('ModernRoboticsI2cCompassSensor');
  Blockly.FtcJava.addReservedWords('VectorF');
  Blockly.FtcJava.addReservedWords('try');
  Blockly.FtcJava.addReservedWords('VerifyError');
  Blockly.FtcJava.addReservedWords('Thread');
  Blockly.FtcJava.addReservedWords('WebcamName');
  Blockly.FtcJava.addReservedWords('Process');
  Blockly.FtcJava.addReservedWords('AssertionError');
  Blockly.FtcJava.addReservedWords('InterruptedException');
  Blockly.FtcJava.addReservedWords('AndroidTextToSpeech');
  Blockly.FtcJava.addReservedWords('ElapsedTime');
  Blockly.FtcJava.addReservedWords('Enum');
  Blockly.FtcJava.addReservedWords('ThreadDeath');
  Blockly.FtcJava.addReservedWords('Thread.UncaughtExceptionHandler');
  Blockly.FtcJava.addReservedWords('InstantiationException');
  Blockly.FtcJava.addReservedWords('Error');
  Blockly.FtcJava.addReservedWords('internalPostInitLoop');
  Blockly.FtcJava.addReservedWords('InstantiationError');
  Blockly.FtcJava.addReservedWords('ProcessBuilder.Redirect.Type');
  Blockly.FtcJava.addReservedWords('double');
  Blockly.FtcJava.addReservedWords('TempUnit');
  Blockly.FtcJava.addReservedWords('const');
  Blockly.FtcJava.addReservedWords('Float');
  Blockly.FtcJava.addReservedWords('Runtime');
  Blockly.FtcJava.addReservedWords('TfodRoverRuckus');
  Blockly.FtcJava.addReservedWords('Character.UnicodeScript');
  Blockly.FtcJava.addReservedWords('NoSuchFieldError');
  Blockly.FtcJava.addReservedWords('InheritableThreadLocal');
  Blockly.FtcJava.addReservedWords('Thread.State');
  Blockly.FtcJava.addReservedWords('loop');
  Blockly.FtcJava.addReservedWords('Acceleration');
  Blockly.FtcJava.addReservedWords('PIDCoefficients');
  Blockly.FtcJava.addReservedWords('DcMotor');
  Blockly.FtcJava.addReservedWords('TypeNotPresentException');
  Blockly.FtcJava.addReservedWords('StackTraceElement');
  Blockly.FtcJava.addReservedWords('long');
  Blockly.FtcJava.addReservedWords('IllegalArgumentException');
  Blockly.FtcJava.addReservedWords('Color');
  Blockly.FtcJava.addReservedWords('Boolean');
  Blockly.FtcJava.addReservedWords('MatrixF');
  Blockly.FtcJava.addReservedWords('new');
  Blockly.FtcJava.addReservedWords('void');
  Blockly.FtcJava.addReservedWords('time');
  Blockly.FtcJava.addReservedWords('UnsatisfiedLinkError');
  Blockly.FtcJava.addReservedWords('if');
  Blockly.FtcJava.addReservedWords('VuforiaLocalizer');
  Blockly.FtcJava.addReservedWords('ArrayList');
  Blockly.FtcJava.addReservedWords('IllegalThreadStateException');
  Blockly.FtcJava.addReservedWords('MagneticFlux');
  Blockly.FtcJava.addReservedWords('SoundPlayer');
  Blockly.FtcJava.addReservedWords('return');
  Blockly.FtcJava.addReservedWords('Orientation');
  Blockly.FtcJava.addReservedWords('DistanceSensor');
  Blockly.FtcJava.addReservedWords('stop');
  Blockly.FtcJava.addReservedWords('static');
  Blockly.FtcJava.addReservedWords('waitOneFullHardwareCycle');
  Blockly.FtcJava.addReservedWords('AbstractMethodError');
  Blockly.FtcJava.addReservedWords('NumberFormatException');
  Blockly.FtcJava.addReservedWords('AnalogOutput');
  Blockly.FtcJava.addReservedWords('enum');
  Blockly.FtcJava.addReservedWords('BNO055IMU');
  Blockly.FtcJava.addReservedWords('ModernRoboticsI2cRangeSensor');
  Blockly.FtcJava.addReservedWords('while');
  Blockly.FtcJava.addReservedWords('Gyroscope');
  Blockly.FtcJava.addReservedWords('LinearOpModeHelper');
  Blockly.FtcJava.addReservedWords('class');
  Blockly.FtcJava.addReservedWords('Throwable');
  Blockly.FtcJava.addReservedWords('SuppressWarnings');
  Blockly.FtcJava.addReservedWords('NormalizedRGBA');
  Blockly.FtcJava.addReservedWords('Servo');
  Blockly.FtcJava.addReservedWords('IllegalMonitorStateException');
  Blockly.FtcJava.addReservedWords('super');
  Blockly.FtcJava.addReservedWords('Cloneable');
  Blockly.FtcJava.addReservedWords('LinkageError');
  Blockly.FtcJava.addReservedWords('AndroidGyroscope');
  Blockly.FtcJava.addReservedWords('ProcessBuilder.Redirect');
  Blockly.FtcJava.addReservedWords('gamepad1');
  Blockly.FtcJava.addReservedWords('msStuckDetectInit');
  Blockly.FtcJava.addReservedWords('ExceptionInInitializerError');
  Blockly.FtcJava.addReservedWords('ClassLoader');
  Blockly.FtcJava.addReservedWords('InternalError');
  Blockly.FtcJava.addReservedWords('int');
  Blockly.FtcJava.addReservedWords('I2cAddressableDevice');
  Blockly.FtcJava.addReservedWords('else');
  Blockly.FtcJava.addReservedWords('private');
  Blockly.FtcJava.addReservedWords('internalUpdateTelemetryNow');
  Blockly.FtcJava.addReservedWords('do');
  Blockly.FtcJava.addReservedWords('StringBuffer');
  Blockly.FtcJava.addReservedWords('Long');
  Blockly.FtcJava.addReservedWords('msStuckDetectInitLoop');
  Blockly.FtcJava.addReservedWords('Void');
  Blockly.FtcJava.addReservedWords('NoClassDefFoundError');
  Blockly.FtcJava.addReservedWords('native');
  Blockly.FtcJava.addReservedWords('VirtualMachineError');
  Blockly.FtcJava.addReservedWords('Override');
  Blockly.FtcJava.addReservedWords('idle');
  Blockly.FtcJava.addReservedWords('Class');
  Blockly.FtcJava.addReservedWords('UltrasonicSensor');
  Blockly.FtcJava.addReservedWords('internalOpModeServices');
  Blockly.FtcJava.addReservedWords('AndroidOrientation');
  Blockly.FtcJava.addReservedWords('short');
  Blockly.FtcJava.addReservedWords('Package');
  Blockly.FtcJava.addReservedWords('Recognition');
  Blockly.FtcJava.addReservedWords('SwitchableLight');
  Blockly.FtcJava.addReservedWords('extends');
  Blockly.FtcJava.addReservedWords('resetStartTime');
  Blockly.FtcJava.addReservedWords('Axis');
  Blockly.FtcJava.addReservedWords('DistanceUnit');
  Blockly.FtcJava.addReservedWords('NullPointerException');
  Blockly.FtcJava.addReservedWords('TouchSensor');
  Blockly.FtcJava.addReservedWords('protected');
  Blockly.FtcJava.addReservedWords('internalPreInit');
  Blockly.FtcJava.addReservedWords('LightSensor');
  Blockly.FtcJava.addReservedWords('OpticalDistanceSensor');
  Blockly.FtcJava.addReservedWords('interface');
  Blockly.FtcJava.addReservedWords('I2cAddrConfig');
  Blockly.FtcJava.addReservedWords('telemetry');
  Blockly.FtcJava.addReservedWords('StringBuilder');
  Blockly.FtcJava.addReservedWords('Object');
  Blockly.FtcJava.addReservedWords('IllegalStateException');
  Blockly.FtcJava.addReservedWords('Velocity');
  Blockly.FtcJava.addReservedWords('VuforiaBase');
  Blockly.FtcJava.addReservedWords('CharSequence');
  Blockly.FtcJava.addReservedWords('RobotLog');
  Blockly.FtcJava.addReservedWords('NoSuchFieldException');
  Blockly.FtcJava.addReservedWords('Comparable');
  Blockly.FtcJava.addReservedWords('ThreadGroup');
  Blockly.FtcJava.addReservedWords('ArithmeticException');
  Blockly.FtcJava.addReservedWords('JustLoggingAccelerationIntegrator');
  Blockly.FtcJava.addReservedWords('throws');
  Blockly.FtcJava.addReservedWords('CompassSensor');
  Blockly.FtcJava.addReservedWords('import');
  Blockly.FtcJava.addReservedWords('androidAccelerometer');
  Blockly.FtcJava.addReservedWords('androidGyroscope');
  Blockly.FtcJava.addReservedWords('androidOrientation');
  Blockly.FtcJava.addReservedWords('androidSoundPool');
  Blockly.FtcJava.addReservedWords('androidTextToSpeech');
  Blockly.FtcJava.addReservedWords('gamepad1');
  Blockly.FtcJava.addReservedWords('gamepad2');
  Blockly.FtcJava.addReservedWords('tfodRoverRuckus');
  Blockly.FtcJava.addReservedWords('tfodSkyStone');
  Blockly.FtcJava.addReservedWords('vuforiaRelicRecovery');
  Blockly.FtcJava.addReservedWords('vuforiaRoverRuckus');
  Blockly.FtcJava.addReservedWords('vuforiaSkyStone');
}

function getIconClass(categoryName) {
  if (categoryName == 'AccelerationSensor') {
    return 'AccelerationSensor-icon';
  }
  if (categoryName == 'AnalogInput') {
    return 'AnalogInput-icon';
  }
  if (categoryName == 'AnalogOutput') {
    return 'AnalogOutput-icon';
  }
  if (categoryName == 'ColorSensor') {
    return 'ColorSensor-icon';
  }
  if (categoryName == 'CompassSensor') {
    return 'CompassSensor-icon';
  }
  if (categoryName == 'CRServo') {
    return 'CRServo-icon';
  }
  if (categoryName == 'DcMotor') {
    return 'DcMotor-icon';
  }
  if (categoryName == 'DigitalChannel') {
    return 'DigitalChannel-icon';
  }
  if (categoryName == 'DistanceSensor') {
    return 'UltrasonicSensor-icon';
  }
  if (categoryName == 'GyroSensor') {
    return 'GyroSensor-icon';
  }
  if (categoryName == 'IrSeekerSensor') {
    return 'IrSeekerSensor-icon';
  }
  if (categoryName == 'LED') {
    return 'LED-icon';
  }
  if (categoryName == 'LightSensor') {
    return 'LightSensor-icon';
  }
  if (categoryName == 'REV Color/Range Sensor') {
    return 'ColorSensor-icon';
  }
  if (categoryName == 'MrI2cCompassSensor') {
    return 'CompassSensor-icon';
  }
  if (categoryName == 'MrI2cRangeSensor') {
    return 'OpticalDistanceSensor-icon';
  }
  if (categoryName == 'OpticalDistanceSensor') {
    return 'OpticalDistanceSensor-icon';
  }
  if (categoryName == 'RevBlinkinLedDriver') {
    return 'LED-icon';
  }
  if (categoryName == 'Servo') {
    return 'Servo-icon';
  }
  if (categoryName == 'ServoController') {
    return 'ServoController-icon';
  }
  if (categoryName == 'TouchSensor') {
    return 'TouchSensor-icon';
  }
  if (categoryName == 'UltrasonicSensor') {
    return 'UltrasonicSensor-icon';
  }
  if (categoryName == 'VoltageSensor') {
    return 'VoltageSensor-icon';
  }
  if (categoryName == 'Dual') {
    return 'DcMotor-icon';
  }
  if (categoryName == 'Gamepad') {
    return 'Gamepad-icon';
  }
  if (categoryName == 'LinearOpMode') {
    return 'LinearOpMode-icon';
  }
  if (categoryName == 'Color') {
    return 'ColorSensor-icon';
  }
  if (categoryName == 'ElapsedTime') {
    return 'ElapsedTime-icon';
  }
  return '';
}

function getCapabilityWarning(capability) {
  switch (capability) {
    case 'webcam':
      return 'The current configuration has no webcam.';
    case 'camera':
      return 'This device does not have a camera.';
    case 'vuforia':
      return 'null';
  }
  return '';
}

