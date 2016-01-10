import {IModel, ModelBase} from "../Base/IModel";

export class Asset {//extends ModelBase<number> {

    //Origin:Asset;

    private _id: number;
    private _msn: string;
    private _creationDate: Date;

    blocksPerRow: (windowWidth: number) => number
    = function (windowWidth) {
        return Math.floor(windowWidth / 12);
    };


    Clone: () => Asset  
    = function ()
    {
        return JSON.parse(JSON.stringify(this));
    }

    constructor() {
       
    }

    get Id(): number {
        return this._id;
    }
    set Id(value: number) {
        this._id = value;
    }
   
    get Msn(): string {
        return this._msn;
    }
    set Msn(value: string) {
        this._msn = value;
    }

    get CreationDate(): Date {
        return this._creationDate;
    }
    set CreationDate(value: Date){
        this._creationDate= value;
    }

}
