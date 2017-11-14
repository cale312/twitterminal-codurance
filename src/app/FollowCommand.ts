import { Command } from "./Command";
import { IRepository } from "../database/IRepository";
import { ISentence } from "./ISentence";

export class FollowCommand extends Command {
    private userRepository: IRepository;

    constructor(userRepository: IRepository) {
        super();

        this.userRepository = userRepository;
    }

    private canExecute(input: ISentence): boolean {
        return input.verb === 'follows';
    }

    execute(input: ISentence): string {
        if (this.canExecute(input)) {
            return this.userRepository.findOne({ name: input.subject })
                .subscribeTo(this.userRepository.findOne({ name: input.object }));
        }

        this.next(input);
    }
}