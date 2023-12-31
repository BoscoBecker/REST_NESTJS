import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { FirebirdService } from './connection/firebird.service';


@Module({
  controllers: [AppController],
  providers: [AppService,FirebirdService],
})
export class AppModule {}
