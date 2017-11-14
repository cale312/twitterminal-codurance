"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var Database_1 = require("../database/Database");
var UserRepository_1 = require("../database/UserRepository");
var PostRepository_1 = require("../app/PostRepository");
var FollowCommand_1 = require("../app/FollowCommand");
var User_1 = require("../app/User");
describe("The FollowCommand Class", function () {
    it("should add a User to another User's subscriptions list when the input command's verb is 'follows'", function () {
        var input = {
            subject: "Sandro",
            verb: "follows",
            object: "Andre"
        };
        var secondInput = {
            subject: "Sandro",
            verb: "follows",
            object: "Charne"
        };
        var database = new Database_1.Database();
        var userRepository = new UserRepository_1.UserRepository(database);
        var postRepository = new PostRepository_1.PostRepository(database);
        var followCommand = new FollowCommand_1.FollowCommand();
        userRepository.store(new User_1.User("Sandro"));
        userRepository.store(new User_1.User("Andre"));
        userRepository.store(new User_1.User("Charne"));
        assert.equal(followCommand.execute(input, userRepository, postRepository), "Sandro has followed Andre.");
        assert.equal(followCommand.execute(secondInput, userRepository, postRepository), "Sandro has followed Charne.");
        assert.deepEqual(userRepository.findOne({ name: "Sandro" }).subscribedTo, [
            "Andre",
            "Charne"
        ]);
    });
});
