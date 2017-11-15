import { Command } from "./Command";
import { ISentence } from "./ISentence";
import { IRepository } from "../database/IRepository";
import { Timeline } from "./Timeline";
import { User } from "./User";

export class ReadCommand extends Command {
    private userRepository: IRepository<User>;

    constructor(userRepository: IRepository<User>) {
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

        return this.next(input);
    }
}