import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalculationModule } from './Calculations/calculations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DB_HOST!,
        port: +process.env.DB_PORT!,
        username: process.env.DB_USER!,
        password: process.env.DB_PASSWORD!,
        database: process.env.DB_DATABASE!,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    CalculationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
