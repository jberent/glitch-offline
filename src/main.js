"use strict";
function test() {
    var gamepads = new GamePadManager();
    window.addEventListener("gamepadconnected", function (e) {
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", e.gamepad.index, e.gamepad.id, e.gamepad.buttons.length, e.gamepad.axes.length);
    });
    window.addEventListener("gamepaddisconnected", function (e) {
        console.log("Gamepad disconnected from index %d: %s", e.gamepad.index, e.gamepad.id);
    });
}
var GamePadManager = /** @class */ (function () {
    function GamePadManager() {
        this.gamepads = [];
    }
    GamePadManager.prototype.Connecting = function (ev) {
        var gamepad = new GamePadHost(ev.gamepad);
        this.gamepads[gamepad.index] = gamepad;
    };
    return GamePadManager;
}());
var GamePadHost = /** @class */ (function () {
    function GamePadHost(pad) {
        this.pad = pad;
    }
    Object.defineProperty(GamePadHost.prototype, "index", {
        get: function () { return this.pad.index; },
        enumerable: false,
        configurable: true
    });
    ;
    return GamePadHost;
}());
//# sourceMappingURL=main.js.map