import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { InterestModule } from './interest/interest.module';
import { VolunteerModule } from './volunteer/volunteer.module';
import { Volunteer } from './volunteer/volunteer.entity';
import { Interest } from './interest/interest.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// path of static assets
const staticDir = process.env.STATIC_DIR;

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Volunteer]),
    TypeOrmModule.forFeature([Interest]),
    InterestModule,
    VolunteerModule,
    ServeStaticModule.forRoot({
      rootPath: staticDir || join(__dirname, '..', '..', 'client', 'build'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
