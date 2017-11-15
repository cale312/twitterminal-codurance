import * as find from "lodash.find";

import { Database } from "./Database";
import { User } from "../app/User";
import { IRepository } from "./IRepository";
import { IQuery } from "../app/IQuery";

export class UserRepository implements IRepository<User> {
    database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    store(user: User): string {
        this.database.data.push(user);
        return `User: '${user.name}' successfully saved to the database.`;
    }

    findOne(query: IQuery): User | undefined {
        return find(this.database.data, query);
    }
}