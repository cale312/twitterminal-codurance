import { ISentence } from "./ISentence";
import { IRepository } from "../database/IRepository";

export abstract class Command {
    protected successor: Command;

    abstract checkIfCanExecute(
        input: ISentence,
        userRepository: IRepository,
        postRepository: IRepository
    ): string | void;

    succeedWith(successor: Command) {
        this.successor = successor;
    }

    next(input: ISentence, userRepository: IRepository, postRepository: IRepository) {
        if (this.successor) {
            this.successor.checkIfCanExecute(input, userRepository, postRepository);
        }
    }
}