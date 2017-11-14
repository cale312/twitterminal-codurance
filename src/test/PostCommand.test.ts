import * as assert from "assert";
import { PostCommand } from "../app/PostCommand";
import { UserRepository } from "../database/UserRepository";
import { Database } from "../database/Database";
import { PostRepository } from "../database/PostRepository";

describe("The PostCommand class", () => {

    it("should create a user if the user does not exist in the database", () => {
        let input = {
            subject: "Sandro",
            verb: "->",
            object: "This is my first post!"
        };

        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);

        let postCommand = new PostCommand(userRepository, postRepository);

        postCommand.execute(input);

        assert.equal(userRepository.findOne({ name: "Sandro" }).name, "Sandro");
    })

});
