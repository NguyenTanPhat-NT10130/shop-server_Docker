import { ShopService } from './../../services/shop/shop.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Item } from 'src/models/shop.model';

@Controller('shop')
export class ShopController {
  constructor(private shopSer: ShopService) {}

  @Get('/')
  getItemById(@Query('id') id: string) {
    return this.shopSer.getItemById(id);
  }
  @Get('/all')
  getAllItems() {
    return this.shopSer.getAllItems();
  }
  @Get('/')
  getItemByName(@Query('name') name: string) {
    return this.shopSer.getItemByName(name);
  }
  @Get('/')
  getItemByDescription(@Query('description') description: string) {
    return this.shopSer.getItemByDescription(description);
  }
  @Post('/')
  addItem(@Body() item: Item) {
    return this.shopSer.addItem(item);
  }
  @Put('/')
  updateItem(@Body() item: Item) {
    return this.shopSer.updateItem(item, item.id);
  }
  @Delete('/')
  deleteItems(@Query('id') id: string) {
    return this.shopSer.deleteItems(id);
  }
}