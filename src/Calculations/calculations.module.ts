import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calculations } from './entities/calculations.entity';
import { CalculationController } from './calculations.controller';
import { CalculationService } from './calculations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Calculations])],
  controllers: [CalculationController],
  providers: [CalculationService],
})
export class CalculationModule {}
