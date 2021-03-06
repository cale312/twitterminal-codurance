import * as assert from "assert";

import { Twitterminal } from "../app/Twitterminal";
import { UserRepository } from "../database/UserRepository";
import { PostCommand } from "../app/PostCommand";
import { Database } from "../database/Database";
import { PostRepository } from "../database/PostRepository";
import { ReadCommand } from "../app/ReadCommand";
import { Timeline } from "../app/Timeline";
import { FollowCommand } from "../app/FollowCommand";
import { WallCommand } from "../app/WallCommand";
import { Wall } from "../app/Wall";
import { User } from "../app/User";

describe("The Twitterminal Class", () => {

    it(`should create a User when the input from the console is in the format of 'username -> hello!'`, () => {
        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);

        let twitterminal = new Twitterminal(userRepository, postRepository);

        twitterminal.handleInput("Sandro -> This is first post!");

        assert.equal(userRepository.findOne({ name: "Sandro" }).name, "Sandro");
    });

    it(`should save a Post to a User when the input command's 'verb' is '->'`, () => {
        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);

        let twitterminal = new Twitterminal(userRepository, postRepository);

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

        let twitterminal = new Twitterminal(userRepository, postRepository);

        twitterminal.handleInput("Sandro -> This is my first post!");
        twitterminal.handleInput("Sandro -> This is my second post!");
        twitterminal.handleInput("Sandro");

        let sandroPosts = userRepository.findOne({ name: "Sandro" }).posts;
        let sandroTimeline = new Timeline(sandroPosts);

        assert.deepEqual(sandroTimeline.posts.sort(), [
            "This is my first post! (a few seconds ago)",
            "This is my second post! (a few seconds ago)"
        ]);
    });

    it("should add a User to another User's subscriptions list when the input verb is 'follow'", () => {
        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);

        let twitterminal = new Twitterminal(userRepository, postRepository);

        twitterminal.handleInput("Sandro -> First post");
        twitterminal.handleInput("Andre -> First post");
        twitterminal.handleInput("Charne -> First post");

        twitterminal.handleInput("Sandro follows Andre");
        twitterminal.handleInput("Sandro follows Charne");

        assert.deepEqual(userRepository.findOne({ name: "Sandro" }).subscribedTo, [
            "Andre",
            "Charne"
        ]);
    });

    it("should display a User's wall when the input command verb is the word 'wall'", () => {
        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);

        let twitterminal = new Twitterminal(userRepository, postRepository);

        twitterminal.handleInput("Sandro -> First post");
        twitterminal.handleInput("Sandro -> Second post");
        twitterminal.handleInput("Andre -> First post");
        twitterminal.handleInput("Charne -> First post");

        twitterminal.handleInput("Charne follows Sandro");
        twitterminal.handleInput("Charne follows Andre");

        let charneWall = new Wall(userRepository.findOne({ name: "Charne"}), userRepository);

        assert.deepEqual(charneWall.posts.sort(), [
            "Andre - First post (a few seconds ago)",
            "Charne - First post (a few seconds ago)",
            "Sandro - First post (a few seconds ago)",
            "Sandro - Second post (a few seconds ago)"
        ]);
        // assert.equal(twitterminal.handleInput("Charne wall"), "Wall has been logged to the console.");
    });

    it("should return an error string if the command is not executed", () => {
        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);

        let twitterminal = new Twitterminal(userRepository, postRepository);

        assert.equal(twitterminal.handleInput("Sandro + donkey!!!!!!"), `You have entered an invalid command.
        Read the documentation at github.com/ggsbv/twitterminal for more details.`);
    });

    it("should return the correct success string message when the corresponding command is executed", () => {
        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);

        let twitterminal = new Twitterminal(userRepository, postRepository);

        assert.equal(twitterminal.handleInput("Sandro + donkey!!!!!!"), `You have entered an invalid command.
        Read the documentation at github.com/ggsbv/twitterminal for more details.`);

        assert.equal(twitterminal.handleInput("Sandro -> First post."),
            "Post has been saved to Sandro's account.");

        assert.equal(twitterminal.handleInput("Andre -> First post."),
            "Post has been saved to Andre's account.");

        assert.equal(twitterminal.handleInput("Sandro"),
            "Timeline has been logged to the console.");

        assert.equal(twitterminal.handleInput("Sandro follows Andre"),
            "Sandro has followed Andre.");

        assert.equal(twitterminal.handleInput("Sandro wall"),
            "Wall has been logged to the console.");
    });
});