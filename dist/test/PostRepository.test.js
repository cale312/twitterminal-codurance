"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var moment = require("moment");
var User_1 = require("../app/User");
var PostRepository_1 = require("../app/PostRepository");
var Post_1 = require("../app/Post");
var UserRepository_1 = require("../database/UserRepository");
var Database_1 = require("../database/Database");
describe("The PostRepository class", function () {
    it("should store a Post with its associated User with the correct timestamp", function () {
        var database = new Database_1.Database();
        var userRepository = new UserRepository_1.UserRepository(database);
        var postRepository = new PostRepository_1.PostRepository(database);
        var user = new User_1.User("Sandro");
        var anotherUser = new User_1.User("Andre");
        userRepository.store(user);
        userRepository.store(anotherUser);
        assert.equal(postRepository.store(new Post_1.Post({
            text: "This is my first post!",
            author: anotherUser.name,
            createdAt: moment("2012-12-12 09:12:26")
        })), "Post has been saved to Andre's account.");
        assert.equal(postRepository.store(new Post_1.Post({
            text: "This is my first post!",
            author: user.name,
            createdAt: moment("2012-12-12 09:30:26")
        })), "Post has been saved to Sandro's account.");
        var firstPost = postRepository.findOne({ author: "Andre" });
        assert.equal(firstPost.text, "This is my first post!");
        // assert.equal(firstPost.createdAt, "This is my first post!");
    });
});
