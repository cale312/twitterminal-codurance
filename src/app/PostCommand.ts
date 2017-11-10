import * as moment from "moment";

import { User } from "./User";
import { Post } from "./Post";
import { Command } from "./Command";

import { UserRepository } from "../database/UserRepository";
import { PostRepository } from "./PostRepository";

import { ISentence } from "./ISentence";

export class PostCommand extends Command {
    checkIfCanExecute(input: ISentence, userRepository: UserRepository, postRepository: PostRepository): string {
        if (input.verb === '->') {
            let user = userRepository.findOne({ name: input.subject });

            if (! user) {
                user = new User(input.subject);
                userRepository.store(user);
            }

            return postRepository.store(new Post({ text: input.object, author: user.name, createdAt: moment() }));
        }

        this.next(input, userRepository, postRepository);
    }
}