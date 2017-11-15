import { ISentence } from "./ISentence";
import { IRepository } from "../database/IRepository";

export abstract class Command {
    protected successor: Command;

    abstract execute(input: ISentence): string;

    succeedWith(successor: Command):void {
        this.successor = successor;
    }

    next(input: ISentence): string {
        if (this.successor) {
            return this.successor.execute(input);
        }

        return `You have entered an invalid command.
        Read the documentation at github.com/ggsbv/twitterminal for more details.`;
    }
}