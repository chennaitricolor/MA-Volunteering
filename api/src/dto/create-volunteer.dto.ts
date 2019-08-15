import { IsNotEmpty } from 'class-validator';
import { Interest } from '../interest/interest.entity';
import { Org } from '../org/org.entity';
import { Term } from '../types';

export class CreateVolunteerDTO {
  readonly email: string;
  readonly notify: boolean;
  readonly term: Term;

  readonly prevOrgs?: Org[];

  readonly interests: Interest[] | [];
}
