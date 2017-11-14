import * as assert from "assert";
import { Database } from "../database/Database";
import { UserRepository } from "../database/UserRepository";
import { PostRepository } from "../database/PostRepository";
import { FollowCommand } from "../app/FollowCommand";
import { User } from "../app/User";

describe("The FollowCommand Class", () => {

    it("should add a User to another User's subscriptions list when the input command's verb is 'follows'", () => {
        let input = {
            subject: "Sandro",
            verb: "follows",
            object: "Andre"
        };

        let secondInput = {
            subject: "Sandro",
            verb: "follows",
            object: "Charne"
        };

        let database = new Database();
        let userRepository = new UserRepository(database);

        let followCommand = new FollowCommand(userRepository);

        userRepository.store(new User("Sandro"));
        userRepository.store(new User("Andre"));
        userRepository.store(new User("Charne"));

        assert.equal(followCommand.execute(input), "Sandro has followed Andre.");
        assert.equal(followCommand.execute(secondInput), "Sandro has followed Charne.");

        assert.deepEqual(userRepository.findOne({ name: "Sandro" }).subscribedTo, [
            "Andre",
            "Charne"
        ]);
    })

});