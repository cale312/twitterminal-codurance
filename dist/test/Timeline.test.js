"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var moment = require("moment");
var Post_1 = require("../app/Post");
var Timeline_1 = require("../app/Timeline");
describe("The Timeline Class", function () {
    it("should return posts in ascending order", function () {
        var posts = [
            new Post_1.Post({
                text: "This is my second post!",
                author: "Sandro",
                createdAt: moment().subtract(9, "minutes")
            }),
            new Post_1.Post({
                text: "This is my first post!",
                author: "Sandro",
                createdAt: moment().subtract(11, "minutes")
            })
        ];
        var timeline = new Timeline_1.Timeline(posts);
        assert.deepEqual(timeline.posts, [
            "This is my second post! (9 minutes ago)",
            "This is my first post! (11 minutes ago)"
        ]);
        assert.equal(timeline.display(), "Timeline has been logged to the console.");
    });
});
