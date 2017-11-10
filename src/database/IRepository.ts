export interface IRepository {
    store(): string;
    findOne(): any;
}