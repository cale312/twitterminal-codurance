"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flattenDeep = require("lodash.flattendeep");
var Wall = /** @class */ (function () {
    function Wall(user, userRepository) {
        var posts = [];
        posts.push(user.posts);
        user.subscribedTo.forEach(function (userName) {
            posts.push(userRepository.findOne({ name: userName }).posts);
        });
        posts = flattenDeep(posts);
        this._posts = posts.sort(function (a, b) { return b.createdAt.diff(a.createdAt); }).map(function (post) {
            return post.author + " - " + post.text + " (" + post.createdAt.fromNow() + ")";
        });
    }
    Object.defineProperty(Wall.prototype, "posts", {
        get: function () {
            return this._posts;
        },
        enumerable: true,
        configurable: true
    });
    Wall.prototype.display = function () {
        this._posts.forEach(function (post) { return console.log(post); });
        return "Wall has been logged to the console.";
    };
    return Wall;
}());
exports.Wall = Wall;
