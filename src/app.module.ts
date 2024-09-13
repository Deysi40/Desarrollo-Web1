import { ProductoModule } from './producto/producto.module';
import { ProductoController } from './producto/producto.controller';
import { ProductoService } from './producto/producto.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    ProductoModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Lopez40.',
      database: 'productos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true 
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}