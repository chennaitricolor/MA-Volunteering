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

export type FormState = {
  currentUser: User;
  error: boolean;
  interests: Array<number>;
  notify: boolean;
  type: string;
  errorMessage: string;
  success: boolean;
};

export type FormStateProviderProps = { children: React.ReactNode };
