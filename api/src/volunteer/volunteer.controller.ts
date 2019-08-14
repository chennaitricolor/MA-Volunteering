import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { VolunteerService } from './volunteer.service';
import { Volunteer } from './volunteer.entity';

@Controller('user')
export class VolunteerController {
  constructor(private readonly volunteerService: VolunteerService) {}

  @Get()
  findAll(): Promise<Volunteer[]> {
    return this.volunteerService.findAll();
  }

  @Post('create')
  async create(@Body() volunteer: Volunteer): Promise<any> {
    return this.volunteerService.save(volunteer);
  }

  @Get('/:id')
  async getUser(@Param() id: string): Promise<any> {
    return this.volunteerService.get(id);
  }
}
