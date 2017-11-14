"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var UserRepository_1 = require("../database/UserRepository");
var Database_1 = require("../database/Database");
var PostRepository_1 = require("../database/PostRepository");
var User_1 = require("../app/User");
var Post_1 = require("../app/Post");
var moment = require("moment");
var Wall_1 = require("../app/Wall");
describe("The Wall Class", function () {
    it("should store the User's posts along with the followers' posts in the correct format and order", function () {
        var database = new Database_1.Database();
        var userRepository = new UserRepository_1.UserRepository(database);
        var postRepository = new PostRepository_1.PostRepository(database);
        var sandro = new User_1.User("Sandro");
        var charne = new User_1.User("Charne");
        var andre = new User_1.User("Andre");
        userRepository.store(sandro);
        userRepository.store(charne);
        userRepository.store(andre);
        postRepository.store(new Post_1.Post({ text: "Second", author: "Sandro", createdAt: moment().subtract(9, "minutes") }));
        postRepository.store(new Post_1.Post({ text: "Third", author: "Charne", createdAt: moment().subtract(4, "minutes") }));
        postRepository.store(new Post_1.Post({ text: "First", author: "Andre", createdAt: moment().subtract(1, "hour") }));
        userRepository.findOne({ name: "Sandro" }).subscribeTo(charne);
        userRepository.findOne({ name: "Sandro" }).subscribeTo(andre);
        assert.deepEqual(new Wall_1.Wall(sandro, userRepository).posts, [
            "Charne - Third (4 minutes ago)",
            "Sandro - Second (9 minutes ago)",
            "Andre - First (an hour ago)"
        ]);
    });
});
