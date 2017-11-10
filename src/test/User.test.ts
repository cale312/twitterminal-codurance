import * as assert from "assert";

import { User } from "../app/User";

describe("The User class", () => {

    it("should return a User's name", () => {
        let user = new User("Sandro");

        assert.equal(user.name, "Sandro");
    });

});