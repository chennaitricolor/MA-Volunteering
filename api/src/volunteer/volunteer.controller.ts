import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { VolunteerService } from './volunteer.service';
import { Volunteer } from './volunteer.entity';
import { FindUserDTO } from '../dto/find-user-details.dto';

@Controller('user')
export class VolunteerController {
  constructor(private readonly volunteerService: VolunteerService) {}

  @Get()
  findAll(): Promise<Volunteer[]> {
    return this.volunteerService.findAll();
  }

  @Post()
  @HttpCode(200)
  async getUser(@Body() body: FindUserDTO): Promise<any> {
    const { phone } = body;
    return this.volunteerService.get(phone);
  }
}
