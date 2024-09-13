import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { IsNotEmpty, IsString, MinLength, IsOptional, IsNumber, Min } from 'class-validator';

@Entity({ name: 'producto'})
export class ProductoEntity{

@PrimaryGeneratedColumn('uuid') //auogenerador
  id: number;

  @Column() //obligatorio minimo 3caracterr 
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  nombre: string;

  @Column({ nullable: true }) //opcional
  @IsOptional()
  @IsString()
  descripcion: string;

  @Column('decimal')  //obligaotrio mayor que 0
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  precio: number;

  @Column('int') //obligatorio mayor o igual que 0
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  stock: number;

  @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'}) //timestamp, autogenerador
  fechaCreacion: Date;

}