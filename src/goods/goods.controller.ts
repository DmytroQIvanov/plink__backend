import { GoodsService } from './goods.service';
import { Controller, Get } from '@nestjs/common';
import * as MOCKED_RESPONSE from './goods.json';

@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}


    @Get()
    getGoods(){
        return MOCKED_RESPONSE
    }
}
