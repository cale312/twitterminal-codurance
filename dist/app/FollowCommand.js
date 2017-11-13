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
var FollowCommand = /** @class */ (function (_super) {
    __extends(FollowCommand, _super);
    function FollowCommand() {
        return _super.call(this) || this;
    }
    FollowCommand.prototype.checkIfCanExecute = function (input, userRepository, postRepository) {
        if (input.verb === "follows") {
            return userRepository.findOne({ name: input.subject })
                .subscribeTo(userRepository.findOne({ name: input.object }));
        }
        this.next(input, userRepository, postRepository);
    };
    return FollowCommand;
}(Command_1.Command));
exports.FollowCommand = FollowCommand;
