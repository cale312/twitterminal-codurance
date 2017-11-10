import * as assert from "assert";

import { Twitterminal } from "../app/Twitterminal";
import { UserRepository } from "../database/UserRepository";
import { PostCommand } from "../app/PostCommand";
import { Database } from "../database/Database";
import { PostRepository } from "../app/PostRepository";
import { ReadCommand } from "../app/ReadCommand";

describe("The Twitterminal Class", () => {

    it(`should create a User when the input from the console is in the format of 'username -> hello!'`, () => {
        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);

        let postCommand = new PostCommand();
        let availableCommands = [
            postCommand
        ];

        let twitterminal = new Twitterminal(availableCommands, userRepository, postRepository);

        twitterminal.handleInput("Sandro -> This is first post!");

        assert.equal(userRepository.findOne({ name: "Sandro" }).name, "Sandro");
    });

    it(`should save a Post to a User when the input command's 'verb' is '->'`, () => {
        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);
        let postCommand = new PostCommand();

        let availableCommands = [
            postCommand
        ];

        let twitterminal = new Twitterminal(availableCommands, userRepository, postRepository);

        twitterminal.handleInput("Sandro -> This is my first post!");
        twitterminal.handleInput("Sandro -> This is my second post...");

        assert.deepEqual(userRepository.findOne({ name: "Sandro" }).posts.map(post => post.text), [
            "This is my first post!",
            "This is my second post..."
        ])
    });

    it(`should display the User's timeline when the input command's subject is only a user name`, () => {
        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);
        let postCommand = new PostCommand();
        let readCommand = new ReadCommand();

        let availableCommands = [
            postCommand,
            readCommand
        ];

        let twitterminal = new Twitterminal(availableCommands, userRepository, postRepository);

        twitterminal.handleInput("Sandro -> This is my first post!");
        twitterminal.handleInput("Sandro -> This is my second post!");

        assert.deepEqual(timeline.display(userRepository.findOne({ user: "Sandro" }).posts), [
            "This is my second post!",
            "This is my first post!"
        ]);
    });
});