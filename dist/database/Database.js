"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Database = /** @class */ (function () {
    function Database() {
        this._data = [];
    }
    Object.defineProperty(Database.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (updatedData) {
            this._data = updatedData;
        },
        enumerable: true,
        configurable: true
    });
    return Database;
}());
exports.Database = Database;
