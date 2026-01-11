import { Inject, Injectable } from '@nestjs/common';
import { CreatePixelDto } from './dto/create-pixel.dto';
import { Repository } from 'typeorm';
import { Pixel } from './entities/pixel.entity';

@Injectable()
export class PixelService {
  constructor(
    @Inject('PIXEL_REPOSITORY')
    private pixelRepository: Repository<Pixel>,
  ) {}

  create(createPixelDto: CreatePixelDto) {
    return this.pixelRepository.save(createPixelDto);
  }

  findAll() {
    return this.pixelRepository.find();
  }
}
