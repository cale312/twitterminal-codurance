import * as moment from "moment";

import { User } from "./User";
import { Command } from "./Command";
import { UserRepository } from "../database/UserRepository";

import { SentenceInterface } from "./SentenceInterface";

export class PostCommand extends Command {
    canExecute(input: SentenceInterface, userRepository: UserRepository): string {
        if (input.verb === '->') {
            let user = userRepository.find({ name: input.subject });

            if (! user) {
                user = userRepository.store(new User(input.subject))
            }

            // return postRepository.store(user, new Post({ text: input.object, createdAt: moment() }));
        }

        this.next(input, userRepository);
    }
}