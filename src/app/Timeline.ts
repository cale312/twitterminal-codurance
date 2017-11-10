import { IOutput } from "./IOutput";
import { Post } from "./Post";

export class Timeline implements IOutput {
    _posts: Array<string>;

    constructor(posts: Array<Post>) {
        this._posts = posts.sort((a, b) => b.createdAt.diff(a.createdAt)).map(post => {
            return `${post.text} (${post.createdAt.fromNow()})`;
        });
    }

    get posts(): Array<string> {
        return this._posts;
    }

    display(): string {
        this._posts.forEach(post => console.log(post));
        return "Timeline has been logged to the console.";
    }
}