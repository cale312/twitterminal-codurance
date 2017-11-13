import * as find from "lodash.find";
import * as filter from "lodash.filter";
import * as flattenDeep from "lodash.flattendeep";

import { Database } from "../database/Database";
import { IRepository } from "../database/IRepository";
import { Post } from "./Post";
import { User } from "./User";
import { IQuery } from "./IQuery";

export class PostRepository implements IRepository {
    database: Database;

    constructor(database: Database) {
        this.database = database;
    }

    allPosts(): Array<Post> {
        return flattenDeep(this.database.data.map((user: User) => user.posts));
    }

    store(post: Post): string {
        try {
            return find(this.database.data, user => user.name === post.author).post(post);
        } catch {
            return `Error, could not save Post to ${post.author}`;
        }
    }

    find(query: any): Array<Post> {
        return filter(this.allPosts(), post => query);
    }

    findOne(query: any): Post | undefined {
        return find(this.allPosts(), post => query);
    }
}