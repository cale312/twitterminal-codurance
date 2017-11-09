import { IRepository } from "../database/IRepository";
import { Command } from "./Command";
import { SentenceInterface } from "./SentenceInterface";
import { PostCommand } from "./PostCommand";

export class Twitterminal {
    protected userRepository: IRepository;
    protected availableCommands: Array<Command>;

    constructor(availableCommands: Array<Command>, userRepository: IRepository) {
        this.userRepository = userRepository;
        this.availableCommands = availableCommands;
    }

    private setSuccessors(availableCommands: Array<Command>): void {
        this.availableCommands.forEach(command, index => {
            let nextCommand = availableCommands[index + 1];

            if (nextCommand) {
                command.succeedWith(nextCommand);
            }
        })
    }

    private inputAsObject(input: string): SentenceInterface {
        input = input.split(" ");

        return {
            subject: input[0],
            verb: input[1],
            object: input[2]
        }
    }

    handleInput(input: string): string {
        let input = this.inputAsObject(input);
        let firstCommand = this.availableCommands[0];

        firstCommand.checkIfCanExecute(input, this.userRepository);
    }
}