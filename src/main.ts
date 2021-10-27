function test() {
    let gamepads = new GamePadManager();

    window.addEventListener("gamepadconnected", e => gamepads.Connecting(e));
    window.addEventListener("gamepaddisconnected", e => gamepads.Disconnecting(e));

}

class GamePadManager {
    gamepads: GamePadHost[] = [];

    Connecting(ev:GamepadEvent) {
        let gamepad = new GamePadHost(ev.gamepad);
        this.gamepads[gamepad.index] = gamepad;
    }
    Disconnecting(ev:GamepadEvent) {
        let gamepad = this.gamepads[ev.gamepad.index];
        gamepad.Disconnected();
        delete this.gamepads[gamepad.index];
    }
}

class GamePadHost {
    pad: Gamepad;
    constructor(gamepad: Gamepad) {
        this.pad = gamepad;
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
          gamepad.index, gamepad.id,
          gamepad.buttons.length, gamepad.axes.length);
    }
    
    get index():number {return this.pad.index};

    Disconnected() {
        let gamepad = this.pad;
        console.log("Gamepad disconnected at index %d: %s.",
          gamepad.index, gamepad.id,
          gamepad.buttons.length, gamepad.axes.length);
    }

}
/*



*/