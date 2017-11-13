"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Timeline = /** @class */ (function () {
    function Timeline(posts) {
        this._posts = posts.sort(function (a, b) { return b.createdAt.diff(a.createdAt); }).map(function (post) {
            return post.text + " (" + post.createdAt.fromNow() + ")";
        });
    }
    Object.defineProperty(Timeline.prototype, "posts", {
        get: function () {
            return this._posts;
        },
        enumerable: true,
        configurable: true
    });
    Timeline.prototype.display = function () {
        this._posts.forEach(function (post) { return console.log(post); });
        return "Timeline has been logged to the console.";
    };
    return Timeline;
}());
exports.Timeline = Timeline;
