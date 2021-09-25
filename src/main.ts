function test() {
    let gamepads = new GamePadManager();

    window.addEventListener("gamepadconnected", function(e) {
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
          e.gamepad.index, e.gamepad.id,
          e.gamepad.buttons.length, e.gamepad.axes.length);
      });

      window.addEventListener("gamepaddisconnected", function(e) {
        console.log("Gamepad disconnected from index %d: %s",
          e.gamepad.index, e.gamepad.id);
      });
}

class GamePadManager {
    gamepads: GamePadHost[] = [];

    Connecting(ev:GamepadEvent) {
        let gamepad = new GamePadHost(ev.gamepad) 
        this.gamepads[gamepad.index] = gamepad;
    }
}

class GamePadHost {
    pad: Gamepad;
    constructor(pad: Gamepad) {
        this.pad = pad;
    }
    get index():number {return this.pad.index};
}