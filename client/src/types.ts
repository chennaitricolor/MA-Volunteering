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
  currentUser: User | null;
  error: boolean;
  interests: Array<string>;
  notify: boolean;
  type: string;
  errorMessage: string;
  success: boolean;
};

export type FormStateProviderProps = { children: React.ReactNode };
