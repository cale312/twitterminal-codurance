import * as assert from "assert";

import { User } from "../app/User";

describe("The User class", () => {

    it("should create a User and return his/her name", () => {
        let user = new User("Sandro");

        assert.equal(user.name, "Sandro");
    });

});