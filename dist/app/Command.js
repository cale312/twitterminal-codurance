"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Command = /** @class */ (function () {
    function Command() {
    }
    Command.prototype.succeedWith = function (successor) {
        this.successor = successor;
    };
    Command.prototype.next = function (input) {
        if (this.successor) {
            this.successor.execute(input);
        }
    };
    return Command;
}());
exports.Command = Command;
