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
            return this.successor.execute(input);
        }
        return "You have entered an invalid command.\n        Read the documentation at github.com/ggsbv/twitterminal for more details.";
    };
    return Command;
}());
exports.Command = Command;
