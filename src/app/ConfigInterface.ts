import { Command } from "./Command";
import { IRepository } from "../database/IRepository";

export interface ConfigInterface {
    availableCommands: Array<Command>,
    repository: {
        forUsers: IRepository,
        forPosts: IRepository
    }
}