"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name) {
        this._name = name;
        this._posts = [];
        this._subscribedTo = [];
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "posts", {
        get: function () {
            return this._posts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "subscribedTo", {
        get: function () {
            return this._subscribedTo;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.post = function (post) {
        this._posts.push(post);
        return "Post has been saved to " + this._name + "'s account.";
    };
    User.prototype.subscribeTo = function (user) {
        this._subscribedTo.push(user.name);
        return this._name + " has followed " + user.name + ".";
    };
    return User;
}());
exports.User = User;
