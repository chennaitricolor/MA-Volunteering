import {
  Get,
  Controller,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { InterestService } from './interest.service';
import { Interest } from './interest.entity';

@Controller('interest')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @Get()
  findAll(): Promise<Interest[]> {
    return this.interestService.findAll();
  }

  @Get('/:id')
  async getUser(@Param() id: string): Promise<any> {
    return this.interestService.get(id);
  }
}
