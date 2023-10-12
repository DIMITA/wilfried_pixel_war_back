import { Module } from '@nestjs/common';
import { PixelService } from './pixel.service';
import { PixelGateway } from './pixel.gateway';
import { pixelProviders } from './pixel.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [PixelGateway, PixelService, ...pixelProviders],
})
export class PixelModule {}
