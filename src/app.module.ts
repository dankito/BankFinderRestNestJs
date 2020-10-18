import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankFinderController } from './bankfinder/bankfinder.controller';
import { BankFinderService } from './bankfinder/bankfinder.service';


@Module({
  imports: [ HttpModule ],
  controllers: [AppController, BankFinderController],
  providers: [AppService, BankFinderService],
})
export class AppModule {}
