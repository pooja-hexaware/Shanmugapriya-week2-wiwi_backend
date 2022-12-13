import { Document } from 'mongoose';
export declare type toppingDocument = topping & Document;
export declare class topping {
    toppingname: string;
    toppingprice: number;
    toppingimage: string;
}
export declare const toppingSchema: import("mongoose").Schema<Document<topping, any, any>, import("mongoose").Model<Document<topping, any, any>, any, any>, undefined, {}>;
