import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestService } from './interest.service';
import { InterestController } from './interest.controller';
import { Interest } from './interest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Interest])],
  providers: [InterestService],
  controllers: [InterestController],
})
export class InterestModule {}
