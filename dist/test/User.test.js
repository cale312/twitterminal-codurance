"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var User_1 = require("../app/User");
var Post_1 = require("../app/Post");
var moment = require("moment");
describe("The User class", function () {
    it("should return a User's name", function () {
        var user = new User_1.User("Sandro");
        assert.equal(user.name, "Sandro");
    });
    it("should store a new Post in the User", function () {
        var user = new User_1.User("Sandro");
        user.post(new Post_1.Post({ text: "This is my first post!", author: "Sandro", createdAt: moment("2012-12-12 09:12:26") }));
        assert.equal(user.posts[0].text, "This is my first post!");
        assert.equal(user.posts[0].author, "Sandro");
        assert.equal(user.posts[0].createdAt.format("YYYY-MM-DD HH:mm:ss"), "2012-12-12 09:12:26");
    });
    it("should store a another User's name inside the User's list of subscriptions", function () {
        var sandro = new User_1.User("Sandro");
        var andre = new User_1.User("Andre");
        var charne = new User_1.User("Charne");
        assert.equal(sandro.subscribeTo(andre), "Sandro has followed Andre.");
        assert.equal(sandro.subscribeTo(charne), "Sandro has followed Charne.");
        assert.deepEqual(sandro.subscribedTo, [
            "Andre",
            "Charne"
        ]);
    });
});
