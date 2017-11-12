import { IPost } from "./IPost";
import { Moment } from "moment";

export class Post {
    private _text: string;
    private _author: string;
    private _createdAt: Moment;

    constructor(post: IPost) {
        this._text = post.text;
        this._author = post.author;
        this._createdAt = post.createdAt;
    }

    get text(): string {
        return this._text;
    }

    get author(): string {
        return this._author;
    }

    get createdAt(): Moment {
        return this._createdAt;
    }
}