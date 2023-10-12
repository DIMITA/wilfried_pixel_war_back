import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PixelModule } from './pixel/pixel.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DatabaseModule, PixelModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
