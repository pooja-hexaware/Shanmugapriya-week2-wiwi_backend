import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { menu } from './menu.schema';

export type restaurantDocument = restaurant & Document;

@Schema()
export class restaurant {
   
   @Prop()
   storename: string; 
   
   @Prop()
   storeid: number; 
   
   @Prop()
   storeaddress: string; 
   
   @Prop()
   storecity: string; 
   
   @Prop()
   storezip: string; 
   
   @Prop()
   storestate: string; 
   
   @Prop()
   storephone: string; 
   
   @Prop()
   kitchenphone: string; 
   
   @Prop()
   menu: string[]; 
   
   @Prop()
   storeimage: string; 

   @Prop({type: [{type:Types.ObjectId, ref:menu.name}]})
    menus: mongoose.Types.ObjectId[];
   
}

export const restaurantSchema = SchemaFactory.createForClass(restaurant);