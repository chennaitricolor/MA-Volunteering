import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Interest } from './interest.entity';

@Injectable()
export class InterestService {
  constructor(
    @InjectRepository(Interest)
    private readonly interestRepository: Repository<Interest>,
  ) {}

  async findAll(): Promise<Interest[]> {
    return await this.interestRepository.find();
  }

  async save(interest: Interest): Promise<Interest> {
    return await this.interestRepository.save(interest);
  }

  async update(interest: Interest): Promise<UpdateResult> {
    return await this.interestRepository.update(interest.id, interest);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.interestRepository.delete(id);
  }

  async get(id): Promise<Interest> {
    return await this.interestRepository.findOne(id);
  }
}
