import * as assert from "assert";

import { User } from "../app/User";
import { UserRepository } from "../database/UserRepository";
import { Database } from "../database/Database";

describe("The UserRepository Class", () => {

    it("Should store a user in the database", () => {
        let database = new Database();
        let userRepository = new UserRepository(database);

        assert.equal(userRepository.store(new User("Sandro")), "User: 'Sandro' successfully saved to the database.");
        assert.equal(userRepository.store(new User("Andre")), "User: 'Andre' successfully saved to the database.");
    });

    it("should find a stored user in the database", () => {
        let database = new Database();
        let userRepository = new UserRepository(database);

        userRepository.store(new User("Sandro"));
        userRepository.store(new User("Andre"));

        assert.equal(userRepository.findOne({ name: "Sandro" }).name, "Sandro");
        assert.equal(userRepository.findOne({ name: "Andre" }).name, "Andre");
    });

});