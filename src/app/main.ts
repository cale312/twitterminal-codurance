import { Twitterminal } from "./Twitterminal";
import { Database } from "../database/Database";
import { UserRepository } from "../database/UserRepository";
import { PostRepository } from "../database/PostRepository";

let database = new Database();

let twitterminal = new Twitterminal(new UserRepository(database), new PostRepository(database));

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