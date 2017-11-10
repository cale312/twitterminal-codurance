import * as moment from "moment";

import { User } from "./User";
import { Command } from "./Command";
import { UserRepository } from "../database/UserRepository";

import { ISentence } from "./ISentence";

export class PostCommand extends Command {
    checkIfCanExecute(input: ISentence, userRepository: UserRepository): string {
        if (input.verb === '->') {
            let user = userRepository.findOne({ name: input.subject });

            if (! user) {
                user = new User(input.subject);
                userRepository.store(user);
            }

            // return postRepository.store(user, new Post({ text: input.object, createdAt: moment() }));
        }

        this.next(input, userRepository);
    }
}