import { Term } from '../types';

export class CreateVolunteerDTO {
  readonly id: number | null;
  readonly email: string;
  readonly notify: boolean;
  readonly term: Term;

  readonly prevOrg: string;

  readonly anyInterestFlag: boolean;

  readonly interests: number[] | [];
}
