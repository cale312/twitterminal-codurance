"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Command = /** @class */ (function () {
    function Command() {
    }
    Command.prototype.succeedWith = function (successor) {
        this.successor = successor;
    };
    Command.prototype.next = function (input, userRepository, postRepository) {
        if (this.successor) {
            this.successor.checkIfCanExecute(input, userRepository, postRepository);
        }
    };
    return Command;
}());
exports.Command = Command;
