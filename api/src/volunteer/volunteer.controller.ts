import { Controller, Get, Param } from '@nestjs/common';
import { VolunteerService } from './volunteer.service';
import { Volunteer } from './volunteer.entity';

@Controller('user')
export class VolunteerController {
  constructor(private readonly volunteerService: VolunteerService) {}

  @Get()
  findAll(): Promise<Volunteer[]> {
    return this.volunteerService.findAll();
  }

  @Get('/:email')
  async getUser(@Param() email: string): Promise<any> {
    return this.volunteerService.get(email);
  }
}
