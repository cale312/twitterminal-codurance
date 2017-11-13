import * as assert from "assert";
import { UserRepository } from "../database/UserRepository";
import { PostRepository } from "../app/PostRepository";
import { Database } from "../database/Database";
import { ReadCommand } from "../app/ReadCommand";
import { User } from "../app/User";
import { Post } from "../app/Post";
import moment = require("moment");

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

        let sandro = new User("Sandro");
        userRepository.store(sandro);

        let sandroPosts = [
            new Post({ text: "First post.", author: "Sandro", createdAt: moment().subtract(9, "minutes") }),
            new Post({ text: "Second post.", author: "Sandro", createdAt: moment().subtract(7, "minutes") }),
            new Post({ text: "Second post.", author: "Sandro", createdAt: moment().subtract(3, "minutes") }),
        ];

        sandroPosts.forEach(post => postRepository.store(post));

        let readCommand = new ReadCommand();


        assert.equal(readCommand.checkIfCanExecute(input, userRepository, postRepository),
            "Timeline has been logged to the console.");
    })

});