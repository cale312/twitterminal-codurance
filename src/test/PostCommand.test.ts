import * as assert from "assert";
import { PostCommand } from "../app/PostCommand";
import { UserRepository } from "../database/UserRepository";

describe("The PostCommand class", () => {

    it("should create a user if the user does not exist in the database", () => {
        let input = {
            subject: "Sandro",
            verb: "->",
            object: "This is my first post!"
        };

        let userRepository = new UserRepository();

        let postCommand = new PostCommand();

        postCommand.canExecute(input, userRepository);

        assert.equal(userRepository.find({ name: "Sandro" }).name, "Sandro");
    })

});
