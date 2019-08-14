import { IsNotEmpty } from 'class-validator';
import { Interest } from '../interest/interest.entity';
import { Org } from '../org/org.entity';
import { Term } from '../types';

export class CreateVolunteerDTO {
  readonly email: string;
  readonly notifyFlag: boolean;
  readonly term: Term;

  readonly orgs: Org[] | [];

  readonly interests: Interest[] | [];
}
