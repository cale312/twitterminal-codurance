import { IRepository } from "../database/IRepository";
import { Command } from "./Command";
import { ISentence } from "./ISentence";

export class Twitterminal {
    protected availableCommands: Array<Command>;
    protected userRepository: IRepository;
    protected postRepository: IRepository;

    constructor(availableCommands: Array<Command>, userRepository: IRepository, postRepository: IRepository) {
        this.availableCommands = availableCommands;
        this.userRepository = userRepository;
        this.postRepository = postRepository;
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
            object: inputAsArray.slice(2).join(" ")
        }
    }

    handleInput(input: string): string {
        this.setSuccessors(this.availableCommands);

        let sentence = this.inputAsSentence(input);
        let firstCommand = this.availableCommands[0];

        try {
            return firstCommand.checkIfCanExecute(sentence, this.userRepository, this.postRepository);
        } catch {
            return `You have entered an invalid command. Read the documentation at
             github.com/ggsbv/twitterminal for more details.`
        }
    }
}