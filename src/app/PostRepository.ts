import * as find from "lodash.find";
import * as filter from "lodash.filter";

import { Database } from "../database/Database";
import { IRepository } from "../database/IRepository";

export class PostRepository extends Database implements IRepository {
    constructor() {
        super();
    }

    allPosts(): Array<Post> {
        return this.db.map(user => user.posts);
    }

    store(post: Post): string {
        try {
            post.author.post(post);
            return `Post has been saved to ${post.author.name}'s account.`;
        } catch {
            return "Error, could not save the post to the user.";
        }
    }

    find(query): Array<Post> {
        return filter(this.allPosts(), post => query);
    }

    findOne(query): Post {
        return find(this.allPosts(), post => query);
    }
}