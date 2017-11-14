import { Command } from "./Command";
import { ISentence } from "./ISentence";
import { IRepository } from "../database/IRepository";
import { Wall } from "./Wall";

export class WallCommand extends Command {
    private userRepository: IRepository;

    constructor(userRepository: IRepository) {
        super();

        this.userRepository = userRepository;
    }

    private canExecute(input): boolean {
        return input.verb === 'wall';
    }

    execute(input: ISentence): string {
        if (this.canExecute(input)) {
            return new Wall(this.userRepository.findOne({ name: input.subject }), this.userRepository).display();
        }

        this.next(input);
    }
}