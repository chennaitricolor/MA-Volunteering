import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateVolunteerDTO } from './dto/create-volunteer.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  ping(): string {
    return this.appService.heathCheck();
  }

  @Post('register')
  async registerOrUpdate(@Body() volunteer: CreateVolunteerDTO): Promise<any> {
    return this.appService.registerOrUpdate(volunteer);
  }
}
