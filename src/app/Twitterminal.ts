import { IRepository } from "../database/IRepository";
import { ISentence } from "./ISentence";
import { IUserInput } from "./IUserInput";

import { Command } from "./Command";
import { input, prompt } from "typed-prompts";

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

    private async prompt(): Promise<prompt<IUserInput>> {
        return await prompt<IUserInput>(input(
            "text",
            "Enter command:"
        ));
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

    async start() {
        let userInput = await this.prompt();

        while (userInput.text !== "q") {
            this.handleInput(userInput.text);
            userInput = await this.prompt();
        }

        console.log("Thanks for using Twitterminal. Have a nice day!");
    }
}