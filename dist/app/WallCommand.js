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
var Wall_1 = require("./Wall");
var WallCommand = /** @class */ (function (_super) {
    __extends(WallCommand, _super);
    function WallCommand(userRepository) {
        var _this = _super.call(this) || this;
        _this.userRepository = userRepository;
        return _this;
    }
    WallCommand.prototype.canExecute = function (input) {
        return input.verb === 'wall';
    };
    WallCommand.prototype.execute = function (input) {
        if (this.canExecute(input)) {
            return new Wall_1.Wall(this.userRepository.findOne({ name: input.subject }), this.userRepository).display();
        }
        return this.next(input);
    };
    return WallCommand;
}(Command_1.Command));
exports.WallCommand = WallCommand;
