import { IRepository } from "../database/IRepository";
import { Command } from "./Command";
import { ISentence } from "./ISentence";

export class Twitterminal {
    protected userRepository: IRepository;
    protected availableCommands: Array<Command>;

    constructor(availableCommands: Array<Command>, userRepository: IRepository) {
        this.userRepository = userRepository;
        this.availableCommands = availableCommands;
    }

    private setSuccessors(availableCommands: Array<Command>): void {
        this.availableCommands.forEach((command, index) => {
            let nextCommand = availableCommands[index + 1];

            if (nextCommand) {
                command.succeedWith(nextCommand);
            }
        })
    }

    // A Sentence Object is a user input string that has been deconstructed into a sentence composed of a
    // subject, verb and an object.

    private inputAsSentence(input: string): ISentence {
        let inputAsArray = input.split(" ");

        return {
            subject: inputAsArray[0],
            verb: inputAsArray[1],
            object: inputAsArray[2]
        }
    }

    handleInput(input: string): string {
        this.setSuccessors(this.availableCommands);

        let sentence = this.inputAsSentence(input);
        let firstCommand = this.availableCommands[0];

        console.log(firstCommand.checkIfCanExecute(sentence, this.userRepository));
    }
}