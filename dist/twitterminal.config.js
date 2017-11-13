"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostCommand_1 = require("./app/PostCommand");
var ReadCommand_1 = require("./app/ReadCommand");
var FollowCommand_1 = require("./app/FollowCommand");
var WallCommand_1 = require("./app/WallCommand");
var UserRepository_1 = require("./database/UserRepository");
var Database_1 = require("./database/Database");
var PostRepository_1 = require("./app/PostRepository");
var database = new Database_1.Database();
var userRepository = new UserRepository_1.UserRepository(database);
var postRepository = new PostRepository_1.PostRepository(database);
var config = {
    commands: [
        new PostCommand_1.PostCommand(),
        new ReadCommand_1.ReadCommand(),
        new FollowCommand_1.FollowCommand(),
        new WallCommand_1.WallCommand()
    ],
    repository: {
        forUsers: userRepository,
        forPosts: postRepository
    }
};
exports.default = config;
