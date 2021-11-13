# Driver / Operator Notes (glitch)

## Autonomous

### Placement
* Line up the middle hole in the wall support with the hole on the robot's on/off switch
* Make sure the RED/BLUE A/B switches are set correctly
* (Make sure the carousel motor isn't pressing the switch in)
* Preload the block so that it comes out easily
   * when depositing in the Storage Unit, we don't want it to roll a long way
   * when depositing in the Shipping Hub, it is better if it *launches* a bit (maybe)
### INIT
* Watch the telemetry to make sure the robot INITs with all the right settings

At the end of AUTONOMOUS, the OpMOde should transition automatically to the correct TELEOP

## Tele-Op

### Driver Controller
* Left-trigger is a BRAKE, it is intended for you to be able to work carefully around the hubs
* Right-trigger is a BOOST, could be good for going straight a little faster than normal.

#### Capping
* The grabber-arm has 3 positions
   *  (Y) Way-up, this is just for storage, so just use it when parking or to get it out of the way
   * (X) is for holding the element for capping, don't go higher - use the intake arm to position the height
   *  (A) is all the way down, it is for picking up element, and possibly for placing the element.
* The grabber closes with the LEFT and opens with the RIGHT Button
* If the element is on its side, you can flip it up by dragging the intake over it.
* If ater placing the element on the spindle it is crooked, don't let go! Slighty move/rotate the robot to straighten up the element. Open the grabber and the element should slide down on to the spindle. If not, gently nudge it some more.
* rotate the grabber out of the way before moving the robot or any arms

### Operator Controller
* Left-trigger is a BRAKE, it is intended for you to be able to slow down the intake maybe
* Right-trigger is a BOOST, good for boosting the carousel when the duck looks secure.
* The intake ARM has 5 postions (moves when you release the DPAD UP/DOWN button): 
   * FLOOR -- always pick it up before moving
   * BOTTOM -- matches the bottom level of the Shipping hub
   * MIDDLE -- matches the middle level of the Shippng Hub
   * TOP -- matches the top level of the Shippng Hub -- DONT'GO HIGHER
   * MAX -- not used, maybe usefull to get itout of the way
