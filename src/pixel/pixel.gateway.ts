import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { PixelService } from './pixel.service';
import { CreatePixelDto } from './dto/create-pixel.dto';

@WebSocketGateway()
export class PixelGateway {
  constructor(private readonly pixelService: PixelService) {}

  @SubscribeMessage('createPixel')
  create(@MessageBody() createPixelDto: CreatePixelDto) {
    return this.pixelService.create(createPixelDto);
  }

  @SubscribeMessage('findAllPixel')
  findAll() {
    return this.pixelService.findAll();
  }
}
