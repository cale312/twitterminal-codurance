import { Twitterminal } from "./Twitterminal";
import config from "../twitterminal.config";

let twitterminal = new Twitterminal(
    config.commands,
    config.repository.forUsers,
    config.repository.forPosts
);

console.log(`
*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*
Welcome to Twitterminal, A Twitter clone for your terminal!

*~~~~~~~~~~~~~~~~~*
|    > Usage <    |
*~~~~~~~~~~~~~~~~~*

* You can create an account by submitting input in the following format:
'[username] -> [post]'

The same command format can be used for creating a post.

* You can view a user's timeline by submitting input in the following format:
'[username]'

This will display all the posts that the user has made.

* A user can follow, or subscribe to, another user. You can do this by submitting input in the following format:
'[username] follows [another_username]'

* You can view a user's wall by submitting input in the following format:

'[username] wall'

This will display the latest posts by the User as well as the User's followers!

* Have fun! *

~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*~~~~~~~~~~~~~~~*
`);

twitterminal.start();