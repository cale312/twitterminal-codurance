"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Twitterminal_1 = require("./Twitterminal");
var twitterminal_config_1 = require("../twitterminal.config");
var twitterminal = new Twitterminal_1.Twitterminal(twitterminal_config_1.default.commands, twitterminal_config_1.default.repository.forUsers, twitterminal_config_1.default.repository.forPosts);
console.log("\n*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*\nWelcome to Twitterminal, A Twitter clone for your terminal!\n\n*~~~~~~~~~~~~~~~~~*\n|    > Usage <    |\n*~~~~~~~~~~~~~~~~~*\n\n* You can create an account by submitting input in the following format:\n'[username] -> [post]'\n\nThe same command format can be used for creating a post.\n\n* You can view a user's timeline by submitting input in the following format:\n'[username]'\n\nThis will display all the posts that the user has made.\n\n* A user can follow, or subscribe to, another user. You can do this by submitting input in the following format:\n'[username] follows [another_username]'\n\n* You can view a user's wall by submitting input in the following format:\n\n'[username] wall'\n\nThis will display the latest posts by the User as well as the User's followers!\n\n* Have fun! *\n\n~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*\n");
twitterminal.start();
