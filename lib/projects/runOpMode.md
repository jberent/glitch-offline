[linearOpMode]
# runOpMode 
* "This function is executed when this Op Mode is selected from the Driver Station.

+ "Reverse the Left drive motor."
+ left_motor.Direction = REVERSE
    * "You will have to determine which motor to reverse for your robot."

> waitForStart

if opModIsActive
  * "Put run blocks here"
  WHILE opModeIsActive
    + "Put loop blocks here
    [Dual]
    * "The Y axis of a joystick ranges from -1 in its topmost position to +1 in its bottommost position.  We negate this value so that the topmost position corresponds to maximum forward power."
    + left_motor.Power = -gamepad1.LeftStickY + gamepad1.RightStickX
    + right_motor.Power = -gamepad1.LeftStickY - gamepad1.RightStickX

endif
# Extra
+ TELOP

```

```