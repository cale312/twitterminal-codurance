import * as assert from "assert";
import { Database } from "../database/Database";

describe("The Database Class", () => {

    it("should correctly get and set its data", () => {
        let database = new Database();

        database.data = ["Hello"];

        assert.deepEqual(database.data, ["Hello"]);
    })

});