import * as find from "lodash.find";
import * as filter from "lodash.filter";
import * as flattenDeep from "lodash.flattendeep";

import { Database } from "./Database";
import { IRepository } from "./IRepository";
import { Post } from "../app/Post";
import { User } from "../app/User";
import { IQuery } from "../app/IQuery";


export class PostRepository implements IRepository<Post> {
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
            return `Error, could not save Post.`;
        }
    }

    // find(query: any): Array<Post> {
    //     return filter(this.allPosts(), post => query);
    // }

    findOne(query: IQuery): Post | undefined {
        return find(this.allPosts(), post => query);
    }
}