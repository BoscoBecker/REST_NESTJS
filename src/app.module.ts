import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirebirdService } from './firebird.service';


@Module({
  controllers: [AppController],
  providers: [AppService,FirebirdService],
})
export class AppModule {}
