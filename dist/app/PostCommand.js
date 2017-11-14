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
var moment = require("moment");
var User_1 = require("./User");
var Post_1 = require("./Post");
var Command_1 = require("./Command");
var PostCommand = /** @class */ (function (_super) {
    __extends(PostCommand, _super);
    function PostCommand(userRepository, postRepository) {
        var _this = _super.call(this) || this;
        _this.userRepository = userRepository;
        _this.postRepository = postRepository;
        return _this;
    }
    PostCommand.prototype.canExecute = function (input) {
        return input.verb === '->';
    };
    PostCommand.prototype.execute = function (input) {
        if (this.canExecute(input)) {
            var user = this.userRepository.findOne({ name: input.subject });
            if (!user) {
                user = new User_1.User(input.subject);
                this.userRepository.store(user);
            }
            return this.postRepository.store(new Post_1.Post({ text: input.object, author: user.name, createdAt: moment() }));
        }
        this.next(input);
    };
    return PostCommand;
}(Command_1.Command));
exports.PostCommand = PostCommand;
