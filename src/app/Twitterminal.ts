import { IRepository } from "../database/IRepository";
import { ISentence } from "./ISentence";
import { IUserInput } from "./IUserInput";

import { Command } from "./Command";
import { input, prompt } from "typed-prompts";
import { PostCommand } from "./PostCommand";
import { ReadCommand } from "./ReadCommand";
import { FollowCommand } from "./FollowCommand";
import { WallCommand } from "./WallCommand";
import { User } from "./User";
import { Post } from "./Post";

export class Twitterminal {
    protected userRepository: IRepository<User>;
    protected postRepository: IRepository<Post>;
    protected availableCommands: Array<Command>;

    constructor(userRepository: IRepository<User>, postRepository: IRepository<Post>) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;

        this.availableCommands = [
            new PostCommand(this.userRepository, this.postRepository),
            new ReadCommand(this.userRepository),
            new FollowCommand(this.userRepository),
            new WallCommand(this.userRepository)
        ]
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

        let sentence: ISentence = {
            subject: inputAsArray[0]
        };

        let verb = inputAsArray[1];
        let object = inputAsArray.slice(2).join(" ");

        if (verb) sentence["verb"] = inputAsArray[1];
        if (object) sentence["object"] = inputAsArray.slice(2).join(" ");

        return sentence;
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

        return firstCommand.execute(sentence);
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