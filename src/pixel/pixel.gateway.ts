import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { PixelService } from './pixel.service';
import { CreatePixelDto } from './dto/create-pixel.dto';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class PixelGateway {
  @WebSocketServer()
  server: Server;
  constructor(private readonly pixelService: PixelService) {}

  @SubscribeMessage('createPixel')
  async create(@MessageBody() createPixelDto: CreatePixelDto) {
    const message = await this.pixelService.create(createPixelDto);
    this.server.emit('message', message);
    return message;
  }

  @SubscribeMessage('findAllPixel')
  findAll() {
    return this.pixelService.findAll();
  }
}
