import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Calculations } from './entities/calculations.entity';

@Injectable()
export class CalculationService {
    constructor(
        @InjectRepository(Calculations)
        private calcRepo: Repository<Calculations>,
    ) {}

    async getExpressionsHistory(expression?: string) {

        let whereCond: any = {}

        if (expression) {
            whereCond.expression = Like(`${expression}%`)
        }

        const expressions = await this.calcRepo.find({
            where: whereCond
        });

        return expressions

    }

    async addExpression(expression: string, result: number, date: string) {

        const expressions = this.calcRepo.create({
            expression,
            result,
            date
        })

        if (!expressions) {
            return {
                status: false,
                message: "Ошибка создания"
            }
        }

        await this.calcRepo.save(expressions)

        return expressions

    }

    async deleteExpressionsHistory() {

        const expressions = await this.calcRepo.clear()

        return expressions

    }
}
