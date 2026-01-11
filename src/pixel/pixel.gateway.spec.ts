import { Test, TestingModule } from '@nestjs/testing';
import { PixelGateway } from './pixel.gateway';
import { PixelService } from './pixel.service';

describe('PixelGateway', () => {
  let gateway: PixelGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PixelGateway, PixelService],
    }).compile();

    gateway = module.get<PixelGateway>(PixelGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
