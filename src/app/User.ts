import { Post } from "./Post";

export class User {
    private _name: string;
    private _posts: Array<Post>;
    private _subscribedTo: Array<string>;

    constructor(name: string) {
        this._name = name;
        this._posts = [];
        this._subscribedTo = [];
    }

    get name(): string {
        return this._name;
    }

    get posts(): Array<Post> {
        return this._posts;
    }

    get subscribedTo(): Array<string> {
        return this._subscribedTo;
    }

    post(post: Post): string {
        this._posts.push(post);

        return `Post has been saved to ${this._name}'s account.`;
    }

    subscribeTo(user: User) {
        this._subscribedTo.push(user.name);

        return `${this._name} has followed ${user.name}.`;
    }
}