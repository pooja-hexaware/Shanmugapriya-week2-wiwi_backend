import mongoose, { Document } from 'mongoose';
export declare type menuDocument = menu & Document;
export declare class menu {
    itemname: string;
    baseprice: number;
    itemdescription: string;
    itemimage: string;
    storeid: number[];
    toppings: string[];
    topping: mongoose.Types.ObjectId[];
}
export declare const menuSchema: mongoose.Schema<mongoose.Document<menu, any, any>, mongoose.Model<mongoose.Document<menu, any, any>, any, any>, undefined, {}>;
