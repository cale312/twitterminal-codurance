"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typed_prompts_1 = require("typed-prompts");
var Twitterminal = /** @class */ (function () {
    function Twitterminal(availableCommands, userRepository, postRepository) {
        this.availableCommands = availableCommands;
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }
    Twitterminal.prototype.setSuccessors = function (availableCommands) {
        this.availableCommands.forEach(function (command, index) {
            var nextCommand = availableCommands[index + 1];
            if (nextCommand) {
                command.succeedWith(nextCommand);
            }
        });
    };
    // A Sentence Object is a user input string that has been deconstructed into a sentence composed of a
    // subject, verb and an object.
    Twitterminal.prototype.inputAsSentence = function (input) {
        var inputAsArray = input.split(" ");
        return {
            subject: inputAsArray[0],
            verb: inputAsArray[1],
            object: inputAsArray.slice(2).join(" ")
        };
    };
    Twitterminal.prototype.prompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typed_prompts_1.prompt(typed_prompts_1.input("text", "Enter command:"))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Twitterminal.prototype.handleInput = function (input) {
        this.setSuccessors(this.availableCommands);
        var sentence = this.inputAsSentence(input);
        var firstCommand = this.availableCommands[0];
        try {
            return firstCommand.checkIfCanExecute(sentence, this.userRepository, this.postRepository);
        }
        catch (_a) {
            return "You have entered an invalid command. Read the documentation at\n             github.com/ggsbv/twitterminal for more details.";
        }
    };
    Twitterminal.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prompt()];
                    case 1:
                        userInput = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(userInput.text !== "q")) return [3 /*break*/, 4];
                        this.handleInput(userInput.text);
                        return [4 /*yield*/, this.prompt()];
                    case 3:
                        userInput = _a.sent();
                        return [3 /*break*/, 2];
                    case 4:
                        console.log("Thanks for using Twitterminal. Have a nice day!");
                        return [2 /*return*/];
                }
            });
        });
    };
    return Twitterminal;
}());
exports.Twitterminal = Twitterminal;
