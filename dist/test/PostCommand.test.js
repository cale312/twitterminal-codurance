"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var PostCommand_1 = require("../app/PostCommand");
var UserRepository_1 = require("../database/UserRepository");
var Database_1 = require("../database/Database");
var PostRepository_1 = require("../database/PostRepository");
describe("The PostCommand class", function () {
    it("should create a user if the user does not exist in the database", function () {
        var input = {
            subject: "Sandro",
            verb: "->",
            object: "This is my first post!"
        };
        var database = new Database_1.Database();
        var userRepository = new UserRepository_1.UserRepository(database);
        var postRepository = new PostRepository_1.PostRepository(database);
        var postCommand = new PostCommand_1.PostCommand(userRepository, postRepository);
        postCommand.execute(input);
        assert.equal(userRepository.findOne({ name: "Sandro" }).name, "Sandro");
    });
});
