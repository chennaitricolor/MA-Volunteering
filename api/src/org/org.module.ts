import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrgService } from './org.service';
import { OrgController } from './org.controller';
import { Org } from './org.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Org])],
  providers: [OrgService],
  controllers: [OrgController],
})
export class OrgModule {}
