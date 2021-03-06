export interface User {
  name: string;
  email: string;
  mobileNumber: string;
  gender: string;
  dateOfBirth: string;
}

export interface Interest {
  id: number;
  name: string;
}

export interface Action {
  type: string;

  payload?: Object;
}

export type Dispatch = (action: Action) => void;

export enum Term {
  OneTime = 'onetime',
  ShortTerm = 'shortterm',
  LongTerm = 'longterm',
}

export type FormState = {
  currentUser: User;
  error: boolean;
  interests: number[];
  notify: boolean;
  type: string;
  prevOrg: string;
  errorMessage: string;
  success: boolean;
  anyInterestFlag: boolean;
  existingUserId: number | null;
};

export type CreateVolunteerDTO = {
  id: number | null;
  phone: string;
  email: string | null;
  notify: boolean;
  term: string;

  prevOrg: string;

  anyInterestFlag: boolean;

  interests: number[] | [];
};

export type FormStateProviderProps = { children: React.ReactNode };
