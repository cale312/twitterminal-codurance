import { Command } from "./Command";
import { ISentence } from "./ISentence";
import { IRepository } from "../database/IRepository";
import { Wall } from "./Wall";

export class WallCommand extends Command {
    constructor() {
        super();
    }

    checkIfCanExecute(input: ISentence, userRepository: IRepository, postRepository: IRepository): string | void {
        if (input.verb === "wall") {
            return new Wall(userRepository.findOne({ name: input.subject }), userRepository).display();
        }

        this.next(input, userRepository, postRepository);
    }
}