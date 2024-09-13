import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
