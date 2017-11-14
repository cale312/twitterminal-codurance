"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Command_1 = require("./Command");
var Timeline_1 = require("./Timeline");
var ReadCommand = /** @class */ (function (_super) {
    __extends(ReadCommand, _super);
    function ReadCommand() {
        return _super.call(this) || this;
    }
    ReadCommand.prototype.execute = function (input, userRepository, postRepository) {
        if (!input.verb) {
            return new Timeline_1.Timeline(userRepository.findOne({ name: input.subject }).posts).display();
        }
        this.next(input, userRepository, postRepository);
    };
    return ReadCommand;
}(Command_1.Command));
exports.ReadCommand = ReadCommand;
