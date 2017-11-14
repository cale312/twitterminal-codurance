import * as assert from "assert";
import { UserRepository } from "../database/UserRepository";
import { Database } from "../database/Database";
import { PostRepository } from "../database/PostRepository";
import { User } from "../app/User";
import { Post } from "../app/Post";
import moment = require("moment");
import { Wall } from "../app/Wall";

describe("The Wall Class", () => {

    it("should store the User's posts along with the followers' posts in the correct format and order", () => {
        let database = new Database();
        let userRepository = new UserRepository(database);
        let postRepository = new PostRepository(database);

        let sandro = new User("Sandro");
        let charne = new User("Charne");
        let andre = new User("Andre");

        userRepository.store(sandro);
        userRepository.store(charne);
        userRepository.store(andre);

        postRepository.store(new Post({ text: "Second", author: "Sandro", createdAt: moment().subtract(9, "minutes") }));
        postRepository.store(new Post({ text: "Third", author: "Charne", createdAt: moment().subtract(4, "minutes") }));
        postRepository.store(new Post({ text: "First", author: "Andre", createdAt: moment().subtract(1, "hour") }));

        userRepository.findOne({ name: "Sandro" }).subscribeTo(charne);
        userRepository.findOne({ name: "Sandro" }).subscribeTo(andre);

        assert.deepEqual(new Wall(sandro, userRepository).posts, [
            "Charne - Third (4 minutes ago)",
            "Sandro - Second (9 minutes ago)",
            "Andre - First (an hour ago)"
        ]);
    })

});