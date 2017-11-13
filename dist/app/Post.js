"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post(post) {
        this._text = post.text;
        this._author = post.author;
        this._createdAt = post.createdAt;
    }
    Object.defineProperty(Post.prototype, "text", {
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "author", {
        get: function () {
            return this._author;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "createdAt", {
        get: function () {
            return this._createdAt;
        },
        enumerable: true,
        configurable: true
    });
    return Post;
}());
exports.Post = Post;
