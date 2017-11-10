import * as moment from "moment";

import { User } from "./User";
import { IPost } from "./IPost";

export class Post {
    private _text: string;
    private _author: User;
    private _createdAt: moment;

    constructor(post: IPost) {
        this._text = post.text;
        this._author = post.author;
        this._createdAt = post.createdAt;
    }

    get text(): string {
        return this._text;
    }

    get author(): User {
        return this._author;
    }

    get createdAt(): moment {
        return this._createdAt;
    }
}