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

        assert.equal(userRepository.find({ name: "Sandro" }).name, "Sandro");
    });

});