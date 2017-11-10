import * as moment from "moment";

import { User } from "./User";

export interface IPost {
    text: string,
    author: User,
    createdAt: moment
}