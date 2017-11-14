"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRepository_1 = require("./database/UserRepository");
var Database_1 = require("./database/Database");
var PostRepository_1 = require("./database/PostRepository");
var database = new Database_1.Database();
var userRepository = new UserRepository_1.UserRepository(database);
var postRepository = new PostRepository_1.PostRepository(database);
var config = {
    commands: [],
    repository: {
        forUsers: userRepository,
        forPosts: postRepository
    }
};
exports.default = config;
