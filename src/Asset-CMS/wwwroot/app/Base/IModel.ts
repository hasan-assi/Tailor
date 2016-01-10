export interface IModel<T> {
    Origin: T;
}

export  class ModelBase<T> implements IModel<ModelBase<T>> {

    public Origin: ModelBase<T>;
    protected _id: T;

    constructor() {
        
    }

    //var myAdd: (x: number, y: number) => number =
    //function (x: number, y: number): number { return x + y; };

    //var Clone: () => ModelBase<T> =
    //    function (): ModelBase<T>{
    //    return JSON.parse(JSON.stringify(this));
    //};
}