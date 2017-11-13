"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var User_1 = require("../app/User");
var UserRepository_1 = require("../database/UserRepository");
var Database_1 = require("../database/Database");
describe("The UserRepository Class", function () {
    it("Should store a user in the database", function () {
        var database = new Database_1.Database();
        var userRepository = new UserRepository_1.UserRepository(database);
        assert.equal(userRepository.store(new User_1.User("Sandro")), "User: 'Sandro' successfully saved to the database.");
        assert.equal(userRepository.store(new User_1.User("Andre")), "User: 'Andre' successfully saved to the database.");
    });
    it("should find a stored user in the database", function () {
        var database = new Database_1.Database();
        var userRepository = new UserRepository_1.UserRepository(database);
        userRepository.store(new User_1.User("Sandro"));
        userRepository.store(new User_1.User("Andre"));
        assert.equal(userRepository.findOne({ name: "Sandro" }).name, "Sandro");
        assert.equal(userRepository.findOne({ name: "Andre" }).name, "Andre");
    });
});
