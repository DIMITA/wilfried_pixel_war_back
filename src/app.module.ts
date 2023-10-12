import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PixelModule } from './pixel/pixel.module';

@Module({
  imports: [DatabaseModule, PixelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
