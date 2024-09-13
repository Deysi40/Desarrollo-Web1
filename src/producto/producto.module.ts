
/*
https://docs.nestjs.com/modules
*/

import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoEntity } from './producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoEntity])],
  providers: [ProductoService],
  controllers: [ProductoController],

})
export class ProductoModule {}
