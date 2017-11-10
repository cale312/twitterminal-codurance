import * as moment from "moment";

import { User } from "./User";
import { Post } from "./Post";
import { Command } from "./Command";

import { ISentence } from "./ISentence";
import { IRepository } from "../database/IRepository";

export class PostCommand extends Command {
    constructor() {
        super();
    }

    checkIfCanExecute(input: ISentence, userRepository: IRepository, postRepository: IRepository): string {
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