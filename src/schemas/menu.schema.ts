import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { topping } from './topping.schema';

export type menuDocument = menu & Document;

@Schema()
export class menu {
   
   @Prop()
   itemname: string; 
   
   @Prop()
   baseprice: number; 
   
   @Prop()
   itemdescription: string; 
   
   @Prop()
   itemimage: string; 
   
   @Prop()
   storeid: number[]; 
   
   @Prop()
   toppings: string[]; 

   @Prop({type: [{type:Types.ObjectId, ref:topping.name}]})
   topping: mongoose.Types.ObjectId[];
   
}

export const menuSchema = SchemaFactory.createForClass(menu);