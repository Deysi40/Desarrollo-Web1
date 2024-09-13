/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CrearProductoDto, ActualizarProductoDto } from './dto/producto.dto';

@Controller('productos')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productoService.findOne(id);
  }

  @Post()
  create(@Body() crearProductoDto: CrearProductoDto) {
    return this.productoService.create(crearProductoDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() actualizarProductoDto: ActualizarProductoDto) {
    return this.productoService.update(id, actualizarProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productoService.remove(id);
  }
}
