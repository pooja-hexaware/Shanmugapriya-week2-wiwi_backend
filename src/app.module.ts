import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { restaurantModule } from "./modules/restaurant.module";
import { menuModule } from "./modules/menu.module";
import { toppingModule } from "./modules/topping.module";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGODB_URL, {
    autoCreate: true,
  }),
        restaurantModule,
        menuModule,
        toppingModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
