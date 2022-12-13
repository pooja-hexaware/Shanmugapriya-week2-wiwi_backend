import mongoose, { Document } from 'mongoose';
export declare type restaurantDocument = restaurant & Document;
export declare class restaurant {
    storename: string;
    storeid: number;
    storeaddress: string;
    storecity: string;
    storezip: string;
    storestate: string;
    storephone: string;
    kitchenphone: string;
    menu: string[];
    storeimage: string;
    menus: mongoose.Types.ObjectId[];
}
export declare const restaurantSchema: mongoose.Schema<mongoose.Document<restaurant, any, any>, mongoose.Model<mongoose.Document<restaurant, any, any>, any, any>, undefined, {}>;
