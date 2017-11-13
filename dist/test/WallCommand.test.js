"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var Database_1 = require("../database/Database");
var UserRepository_1 = require("../database/UserRepository");
var PostRepository_1 = require("../app/PostRepository");
var WallCommand_1 = require("../app/WallCommand");
var User_1 = require("../app/User");
var Post_1 = require("../app/Post");
var moment = require("moment");
describe("The WallCommand Class", function () {
    it("should log the User's wall to the console if the input command verb is 'wall'", function () {
        var input = {
            subject: "Charne",
            verb: "wall",
            object: undefined
        };
        var database = new Database_1.Database();
        var userRepository = new UserRepository_1.UserRepository(database);
        var postRepository = new PostRepository_1.PostRepository(database);
        var charne = new User_1.User("Charne");
        userRepository.store(new User_1.User("Sandro"));
        userRepository.store(charne);
        postRepository.store(new Post_1.Post({ text: "Second", author: "Sandro", createdAt: moment().subtract(9, "minutes") }));
        postRepository.store(new Post_1.Post({ text: "Second", author: "Charne", createdAt: moment().subtract(4, "minutes") }));
        var wallCommand = new WallCommand_1.WallCommand();
        assert.equal(wallCommand.checkIfCanExecute(input, userRepository, postRepository), "Wall has been logged to the console.");
    });
});
