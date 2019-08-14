import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Org } from './org.entity';

@Injectable()
export class OrgService {
  constructor(
    @InjectRepository(Org)
    private readonly orgRepository: Repository<Org>,
  ) {}

  async findAll(): Promise<Org[]> {
    return await this.orgRepository.find();
  }

  async save(org: Org): Promise<Org> {
    return await this.orgRepository.save(org);
  }

  async update(org: Org): Promise<UpdateResult> {
    return await this.orgRepository.update(org.id, org);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.orgRepository.delete(id);
  }

  async get(id): Promise<Org> {
    return await this.orgRepository.findOne(id);
  }
}
