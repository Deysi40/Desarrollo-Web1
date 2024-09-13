import { IsNotEmpty, IsString, MinLength, IsOptional, IsNumber, Min } from 'class-validator';

export class CrearProductoDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  precio: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  stock: number;
}

export class ActualizarProductoDto extends CrearProductoDto {}
