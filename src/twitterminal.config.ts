import { PostCommand } from "./app/PostCommand";
import { ReadCommand } from "./app/ReadCommand";
import { FollowCommand } from "./app/FollowCommand";
import { WallCommand } from "./app/WallCommand";
import { UserRepository } from "./database/UserRepository";
import { Database } from "./database/Database";
import { PostRepository } from "./app/PostRepository";

let database = new Database();
let userRepository = new UserRepository(database);
let postRepository = new PostRepository(database);

let config = {
    commands: [
        new PostCommand(),
        new ReadCommand(),
        new FollowCommand(),
        new WallCommand()
    ],
    repository: {
        forUsers: userRepository,
        forPosts: postRepository
    }
};

export default config;