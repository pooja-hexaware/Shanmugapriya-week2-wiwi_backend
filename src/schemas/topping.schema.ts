import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type toppingDocument = topping & Document;

@Schema()
export class topping {
   
   @Prop()
   toppingname: string; 
   
   @Prop()
   toppingprice: number; 
   
   @Prop()
   toppingimage: string; 
   
}

export const toppingSchema = SchemaFactory.createForClass(topping);