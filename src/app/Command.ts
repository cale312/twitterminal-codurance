import { SentenceInterface } from "./SentenceInterface";
import { UserRepository } from "../database/UserRepository";

export abstract class Command {
    protected successor: Command;

    abstract canExecute(
        input: SentenceInterface,
        userRepository: UserRepository,
    ): string;

    succeedWith(successor: Command) {
        this.successor = successor;
    }

    next(input: SentenceInterface, userRepository: UserRepository) {
        if (this.successor) {
            this.successor.canExecute(input, userRepository);
        }
    }
}