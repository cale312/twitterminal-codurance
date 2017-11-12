import { Command } from "./Command";
import { ISentence } from "./ISentence";
import { IRepository } from "../database/IRepository";
import { Timeline } from "./Timeline";

export class ReadCommand extends Command {
    constructor() {
        super();
    }

    checkIfCanExecute(input: ISentence, userRepository: IRepository, postRepository: IRepository): string {
        if (! input.verb) {
            return new Timeline(userRepository.findOne({ name: input.subject }).posts).display();
        }

        this.next(input, userRepository, postRepository);
    }
}