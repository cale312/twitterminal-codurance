import * as flattenDeep from "lodash.flattendeep";

import { IOutput } from "./IOutput";
import { User } from "./User";
import { IRepository } from "../database/IRepository";

export class Wall implements IOutput {
    private _posts: Array<string>;

    constructor(user: User, userRepository: IRepository) {
        let posts = [];

        posts.push(user.posts);

        user.subscribedTo.forEach(userName => {
            posts.push(userRepository.findOne({ name: userName }).posts);
        });

        posts = flattenDeep(posts);
        
        this._posts = posts.sort((a, b) => b.createdAt.diff(a.createdAt)).map(post => {
            return `${post.author} - ${post.text} (${post.createdAt.fromNow()})`;
        });
    }

    get posts(): Array<string> {
        return this._posts;
    }

    display(): string {
        this._posts.forEach(post => console.log(post));
        return "Wall has been logged to the console.";
    }
}