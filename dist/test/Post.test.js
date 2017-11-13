"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var moment = require("moment");
var Post_1 = require("../app/Post");
describe("The Post Class", function () {
    it("should correctly return a Post's text, author and timestamp", function () {
        var post = new Post_1.Post({
            text: "This is my first post!",
            author: "Sandro",
            createdAt: moment("2012-12-12 09:12:26")
        });
        assert.equal(post.text, "This is my first post!");
        assert.equal(post.author, "Sandro");
        assert.equal(post.createdAt.format('YYYY-MM-DD HH:mm:ss'), "2012-12-12 09:12:26");
    });
});
