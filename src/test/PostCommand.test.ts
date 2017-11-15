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

        assert.equal(postCommand.execute(input), "Post has been saved to Sandro's account.");

        assert.equal(userRepository.findOne({ name: "Sandro" }).name, "Sandro");
    });

    it("should return an error message if the command could not be executed", () => {
        let input = {
            subject: "Sandro",
            verb: "follows",
            object: "Andre"
        };

        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);

        let postCommand = new PostCommand(userRepository, postRepository);

        assert.equal(postCommand.execute(input),`You have entered an invalid command.
        Read the documentation at github.com/ggsbv/twitterminal for more details.`);
    });

});
