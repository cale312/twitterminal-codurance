import { Command } from "./Command";
import { ISentence } from "./ISentence";
import { IRepository } from "../database/IRepository";
import { Wall } from "./Wall";
import { User } from "./User";

export class WallCommand extends Command {
    private userRepository: IRepository<User>;

    constructor(userRepository: IRepository<User>) {
        super();

        this.userRepository = userRepository;
    }

    private canExecute(input: ISentence): boolean {
        return input.verb === 'wall';
    }

    execute(input: ISentence): string {
        if (this.canExecute(input)) {
            return new Wall(this.userRepository.findOne({ name: input.subject }), this.userRepository).display();
        }

        return this.next(input);
    }
}