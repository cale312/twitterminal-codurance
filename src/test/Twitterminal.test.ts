import * as assert from "assert";

import { Twitterminal } from "../app/Twitterminal";
import { UserRepository } from "../database/UserRepository";
import { PostCommand } from "../app/PostCommand";

describe("The Twitterminal Class", () => {

    it(`should create a User when the input from the console is in the format of 'username -> hello!'`, () => {
        let userRepository = new UserRepository();
        let postCommand = new PostCommand();
        let availableCommands = [
            postCommand
        ];

        let twitterminal = new Twitterminal(availableCommands, userRepository);

        twitterminal.handleInput("Sandro -> This is first post!");

        assert.equal(userRepository.findOne({ name: "Sandro" }).name, "Sandro");
    });

    it(`should save a Post to a User when the input command's 'verb' is '->'`, () => {
        let userRepository = new UserRepository();
        let postRepository = new PostRepository();
        let postCommand = new PostCommand();
        let availableCommands = [
            postCommand
        ];

        let twitterminal = new Twitterminal(availableCommands, userRepository, postRepository);

        twitterminal.handleInput("Sandro -> This is my first post!");
        twitterminal.handleInput("Sandro -> This is my second post...");

        assert.equal(userRepository.findOne({ name: "Sandro" }).posts.map(post => post.text), [
            "This is my second post...",
            "This is my first post!"
        ])
    });
});