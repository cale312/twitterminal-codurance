import * as assert from "assert";

import { Twitterminal } from "../app/Twitterminal";

describe("The Twitterminal Class", () => {

    it(`should create a User when the input from the console is in the format of 'username -> hello!'`, () => {
        let twitterminal = new Twitterminal();

        twitterminal.handleInput("Sandro -> This is first post!");

        assert.equal(userRepository.find({ name: "Sandro" }).name(), "Sandro");
    });

});