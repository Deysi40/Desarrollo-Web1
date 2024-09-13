/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException, BadRequestException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoEntity } from './producto.entity';
import { CrearProductoDto, ActualizarProductoDto } from './dto/producto.dto';

@Injectable()
export class ProductoService {
    constructor (
        @InjectRepository(ProductoEntity)//Product 
        private productoRepositorio: Repository<ProductoEntity>
    ){}

    async findAll(): Promise<ProductoEntity[]> {
        return await this.productoRepositorio.find();
      }
    
      async findOne(id: number): Promise<ProductoEntity> {
        const producto = await this.productoRepositorio.findOneBy({ id });
        if (!producto) {
          throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return producto;
      }

      async create(crearProductoDto: CrearProductoDto): Promise<ProductoEntity> {
        const { nombre } = crearProductoDto;
        const existingProduct = await this.productoRepositorio.findOneBy({ nombre });
        if (existingProduct) {
          throw new BadRequestException('El producto con este nombre ya existe');
        }
        const producto = this.productoRepositorio.create(crearProductoDto);
        return this.productoRepositorio.save(producto);
      }


      async update(id: number, actualizarProductoDto: ActualizarProductoDto): Promise<ProductoEntity> {
        const producto = await this.findOne(id);
        const updatedProduct = Object.assign(producto, actualizarProductoDto);
        return this.productoRepositorio.save(updatedProduct);
      }

      async remove(id: number): Promise<void> {
        const producto = await this.findOne(id);
        await this.productoRepositorio.remove(producto);
      }


}
