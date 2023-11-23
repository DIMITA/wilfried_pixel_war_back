import { DataSource } from 'typeorm';
import { Pixel } from './entities/pixel.entity';

export const pixelProviders = [
  {
    provide: 'PIXEL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Pixel),
    inject: ['DATA_SOURCE'],
  },
];
