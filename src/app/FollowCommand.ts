import { Command } from "./Command";
import { IRepository } from "../database/IRepository";
import { ISentence } from "./ISentence";

export class FollowCommand extends Command {
    constructor() {
        super();
    }

    checkIfCanExecute(input: ISentence, userRepository: IRepository, postRepository: IRepository): string {
        if (input.verb === "follows") {
            return userRepository.findOne({ name: input.subject })
                .subscribeTo(userRepository.findOne({ name: input.object }));
        }

        this.next(input, userRepository, postRepository);
    }
}