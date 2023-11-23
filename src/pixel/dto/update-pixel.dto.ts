import { PartialType } from '@nestjs/mapped-types';
import { CreatePixelDto } from './create-pixel.dto';

export class UpdatePixelDto extends PartialType(CreatePixelDto) {
  id: number;
  color: string;
  coordx: number;
  coordy: number;
}
