import { Moment } from "moment";

export interface IPost {
    text: string,
    author: string,
    createdAt: Moment
}