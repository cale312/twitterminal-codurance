"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var find = require("lodash.find");
var UserRepository = /** @class */ (function () {
    function UserRepository(database) {
        this.database = database;
    }
    UserRepository.prototype.store = function (user) {
        this.database.data.push(user);
        return "User: '" + user.name + "' successfully saved to the database.";
    };
    UserRepository.prototype.findOne = function (query) {
        return find(this.database.data, query);
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
