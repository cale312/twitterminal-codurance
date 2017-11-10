export class Database {
    private _data: any;

    constructor() {
        this._data = [];
    }

    get data() {
        return this._data;
    }

    set data(updatedData: any) {
        this._data = updatedData;
    }
}