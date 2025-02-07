import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CalculationService } from './calculations.service';

@Controller('history')
export class CalculationController {
  constructor(private readonly calculationService: CalculationService) {}

  @Get('expressions')
  async getHistory(@Query('expression') expression?: string) {
    return this.calculationService.getExpressionsHistory(expression);
  }

  @Delete('expressions')
  async deleteHistory() {
    return this.calculationService.deleteExpressionsHistory();
  }

  @Post('expression')
  async addExpression(
    @Body() body: { expression: string, result: number, date: string }
) {
    return this.calculationService.addExpression(body.expression, body.result, body.date)
  }

}
