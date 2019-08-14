import {
  Get,
  Controller,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { OrgService } from './org.service';
import { Org } from './org.entity';

@Controller('org')
export class OrgController {
  constructor(private readonly orgService: OrgService) {}

  @Get()
  findAll(): Promise<Org[]> {
    return this.orgService.findAll();
  }

  @Get('/:id')
  async getUser(@Param() id: string): Promise<any> {
    return this.orgService.get(id);
  }
}
