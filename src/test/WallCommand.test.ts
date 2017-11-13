import * as assert from "assert";
import { Database } from "../database/Database";
import { UserRepository } from "../database/UserRepository";
import { PostRepository } from "../app/PostRepository";
import { WallCommand } from "../app/WallCommand";
import { User } from "../app/User";
import { Post } from "../app/Post";
import moment = require("moment");

describe("The WallCommand Class", () => {

    it("should log the User's wall to the console if the input command verb is 'wall'", () => {
        let input = {
            subject: "Charne",
            verb: "wall",
            object: undefined
        };

        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);

        let charne = new User("Charne");

        userRepository.store(new User("Sandro"));
        userRepository.store(charne);

        postRepository.store(new Post({ text: "Second", author: "Sandro", createdAt: moment().subtract(9, "minutes") }));
        postRepository.store(new Post({ text: "Second", author: "Charne", createdAt: moment().subtract(4, "minutes") }));

        let wallCommand = new WallCommand();

        assert.equal(wallCommand.checkIfCanExecute(input, userRepository, postRepository),
            "Wall has been logged to the console.");

    })

});