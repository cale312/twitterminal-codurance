import * as find from "lodash.find";

import { Database } from "./Database";
import { User } from "../app/User";

export class UserRepository extends Database {
    constructor() {
        super();
    }

    store(user: User): string {
        try {
            this.database.push(user);
            return `User: '${user.name}' successfully saved to the database.`;
        } catch {
            return "Error, could not save user to the database."
        }
    }

    find(query): User | undefined {
        return find(this.database, user => query);
    }
}