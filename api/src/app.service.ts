import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Volunteer } from './volunteer/volunteer.entity';
import { CreateVolunteerDTO } from './dto/create-volunteer.dto';
import { Interest } from './interest/interest.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Volunteer)
    private readonly volunteerRepository: Repository<Volunteer>,
    @InjectRepository(Interest)
    private readonly interestRepository: Repository<Interest>,
  ) {}

  heathCheck(): string {
    return 'Pong';
  }

  async register(volunteer: CreateVolunteerDTO): Promise<Volunteer> {
    const {
      notify: notifyFlag,
      prevOrg,
      email,
      term,
      interests,
      anyInterestFlag,
    } = volunteer;
    let allInterests = [];

    if (anyInterestFlag) {
      allInterests = await this.interestRepository.find();
    } else if (interests.length > 0) {
      allInterests = await this.interestRepository
        .createQueryBuilder('interest')
        .where('interest.id IN (:...interests)', { interests })
        .getMany();
    }

    return await this.volunteerRepository.save({
      notifyFlag,
      prevOrg,
      email,
      term,
      interests: allInterests,
    });
  }
}
