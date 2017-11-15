import { IQuery } from "../app/IQuery";

export interface IRepository<T> {
    store(data: T): string;
    findOne(query: IQuery): T | undefined;
}