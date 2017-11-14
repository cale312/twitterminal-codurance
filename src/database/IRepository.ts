import { User } from "../app/User";
import { Post } from "../app/Post";
import { IQuery } from "../app/IQuery";

export interface IRepository {
    store(user?: User, post?: Post): string;
    findOne(query: IQuery): string | undefined;
}