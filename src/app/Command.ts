import { ISentence } from "./ISentence";
import { IRepository } from "../database/IRepository";

export abstract class Command {
    protected successor: Command;

    abstract execute(input: ISentence): string | void;

    succeedWith(successor: Command) {
        this.successor = successor;
    }

    next(input: ISentence) {
        if (this.successor) {
            this.successor.execute(input);
        }
    }
}