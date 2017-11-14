import * as moment from "moment";

import { User } from "./User";
import { Post } from "./Post";
import { Command } from "./Command";

import { ISentence } from "./ISentence";
import { IRepository } from "../database/IRepository";

export class PostCommand extends Command {
    private userRepository: IRepository;
    private postRepository: IRepository;

    constructor(userRepository: IRepository, postRepository: IRepository) {
        super();

        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }

    private canExecute(input: ISentence): boolean {
        return input.verb === '->';
    }

    execute(input: ISentence): string {
        if (this.canExecute(input)) {
            let user = this.userRepository.findOne({ name: input.subject });

            if (! user) {
                user = new User(input.subject);
                this.userRepository.store(user);
            }

            return this.postRepository.store(new Post({ text: input.object, author: user.name, createdAt: moment() }));
        }

        this.next(input);
    }
}
