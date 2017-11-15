import { Command } from "./Command";
import { IRepository } from "../database/IRepository";
import { ISentence } from "./ISentence";
import { User } from "./User";

export class FollowCommand extends Command {
    private userRepository: IRepository<User>;

    constructor(userRepository: IRepository<User>) {
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

        return this.next(input);
    }
}