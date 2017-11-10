import * as assert from "assert";
import { UserRepository } from "../database/UserRepository";
import { PostRepository } from "../app/PostRepository";
import { Database } from "../database/Database";
import { ReadCommand } from "../app/ReadCommand";

describe("The ReadCommand Class", () => {

    it("should return return a success message if the timeline has been logged to the console", () => {
        let input = {
            subject: "Sandro",
            verb: undefined,
            object: undefined
        };

        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);

        let readCommand = new ReadCommand();

        assert.equal(readCommand.checkIfCanExecute(input, userRepository, postRepository),
            "Timeline has been logged to the console.");
    })

});