import { Command } from "./Command";
import { ISentence } from "./ISentence";
import { IRepository } from "../database/IRepository";
import { Timeline } from "./Timeline";

export class ReadCommand extends Command {
    private userRepository: IRepository;

    constructor(userRepository: IRepository) {
        super();

        this.userRepository = userRepository;
    }

    private canExecute(input: ISentence): boolean {
        return input.verb === undefined;
    }

    execute(input: ISentence): string {
        if (this.canExecute(input)) {
            return new Timeline(this.userRepository.findOne({ name: input.subject }).posts).display();
        }

        this.next(input);
    }
}