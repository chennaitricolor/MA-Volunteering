import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { InterestModule } from './interest/interest.module';
import { VolunteerModule } from './volunteer/volunteer.module';
import { OrgModule } from './org/org.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    InterestModule,
    VolunteerModule,
    OrgModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
