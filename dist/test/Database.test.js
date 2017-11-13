"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var Database_1 = require("../database/Database");
describe("The Database Class", function () {
    it("should correctly get and set its data", function () {
        var database = new Database_1.Database();
        database.data = ["Hello"];
        assert.deepEqual(database.data, ["Hello"]);
    });
});
