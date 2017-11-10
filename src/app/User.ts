import { Post } from "./Post";

export class User {
    private _name: string;
    private _posts: Array<Post>;

    constructor(name: string) {
        this._name = name;
        this._posts = [];
    }

    get name(): string {
        return this._name;
    }

    get posts(): Array<Post> {
        return this._posts;
    }

    post(post: Post): string {
        this._posts.push(post);
        return `Post has been saved to ${this._name}'s account.`;
    }
}