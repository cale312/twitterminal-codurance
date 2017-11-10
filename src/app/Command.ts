import { ISentence } from "./ISentence";
import { UserRepository } from "../database/UserRepository";

export abstract class Command {
    protected successor: Command;

    abstract checkIfCanExecute(
        input: ISentence,
        userRepository: UserRepository,
    ): string;

    succeedWith(successor: Command) {
        this.successor = successor;
    }

    next(input: ISentence, userRepository: UserRepository) {
        if (this.successor) {
            this.successor.checkIfCanExecute(input, userRepository);
        }
    }
}