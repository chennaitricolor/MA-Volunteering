import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Volunteer } from './volunteer.entity';

@Injectable()
export class VolunteerService {
  constructor(
    @InjectRepository(Volunteer)
    private readonly volunteerRepository: Repository<Volunteer>,
  ) {}

  async findAll(): Promise<Volunteer[]> {
    return await this.volunteerRepository.find();
  }

  async save(volunteer: Volunteer): Promise<Volunteer> {
    return await this.volunteerRepository.save(volunteer);
  }

  async update(volunteer: Volunteer): Promise<UpdateResult> {
    return await this.volunteerRepository.update(volunteer.id, volunteer);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.volunteerRepository.delete(id);
  }

  async get(id): Promise<Volunteer> {
    return await this.volunteerRepository.findOne(id);
  }
}
