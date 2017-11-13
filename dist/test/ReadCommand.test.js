"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var UserRepository_1 = require("../database/UserRepository");
var PostRepository_1 = require("../app/PostRepository");
var Database_1 = require("../database/Database");
var ReadCommand_1 = require("../app/ReadCommand");
var User_1 = require("../app/User");
var Post_1 = require("../app/Post");
var moment = require("moment");
describe("The ReadCommand Class", function () {
    it("should return return a success message if the timeline has been logged to the console", function () {
        var input = {
            subject: "Sandro",
            verb: undefined,
            object: undefined
        };
        var database = new Database_1.Database();
        var userRepository = new UserRepository_1.UserRepository(database);
        var postRepository = new PostRepository_1.PostRepository(database);
        var sandro = new User_1.User("Sandro");
        userRepository.store(sandro);
        var sandroPosts = [
            new Post_1.Post({ text: "First post.", author: "Sandro", createdAt: moment().subtract(9, "minutes") }),
            new Post_1.Post({ text: "Second post.", author: "Sandro", createdAt: moment().subtract(7, "minutes") }),
            new Post_1.Post({ text: "Second post.", author: "Sandro", createdAt: moment().subtract(3, "minutes") }),
        ];
        sandroPosts.forEach(function (post) { return postRepository.store(post); });
        var readCommand = new ReadCommand_1.ReadCommand();
        assert.equal(readCommand.checkIfCanExecute(input, userRepository, postRepository), "Timeline has been logged to the console.");
    });
});
