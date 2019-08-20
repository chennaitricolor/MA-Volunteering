import React from "react";
import * as actions from "../actionTypes";
import { FormState, FormStateProviderProps, Dispatch, Action } from "../types";

const initialState: FormState = {
  currentUser: {
    name: "",
    email: "",
    mobileNumber: "",
    gender: "",
    dateOfBirth: ""
  },
  error: false,
  errorMessage: "",
  anyInterestFlag: false,
  success: false,
  interests: [],
  notify: false,
  prevOrg: "",
  type: "onetime"
};

const FormStateContext = React.createContext<FormState>(initialState);
const FormDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function formReducer(state: FormState, action: Action) {
  switch (action.type) {
    case actions.SET_USER: {
      return { ...state, currentUser: action.payload, loading: false };
    }
    case actions.SET_INTERESTS: {
      return { ...state, interests: action.payload };
    }
    case actions.SET_PREV_ORG: {
      return { ...state, prevOrg: action.payload };
    }
    case actions.SET_ANY_INTEREST: {
      return { ...state, anyInterestFlag: action.payload };
    }
    case actions.SET_TYPE: {
      return { ...state, type: action.payload };
    }
    case actions.SET_NOTIFY: {
      return { ...state, notify: action.payload };
    }
    case actions.REGISTRATION_REQUEST: {
      return { ...state, loading: true };
    }
    case actions.REGISTRATION_SUCCESS: {
      return { ...state, loading: false, success: true };
    }
    case actions.REGISTRATION_FAILED: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FormStateProvider({ children }: FormStateProviderProps) {
  const [state, dispatch] = React.useReducer(
    formReducer,
    // @ts-ignore
    initialState
  );
  return (
    <FormStateContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormStateContext.Provider>
  );
}

function useFormState() {
  const context = React.useContext(FormStateContext);
  if (context === undefined) {
    throw new Error("useFormState must be used within a FormStateProvider");
  }
  return context;
}

function useFormDispatch() {
  const context = React.useContext(FormDispatchContext);
  if (context === undefined) {
    throw new Error("useFormDispatch must be used within a FormStateProvider");
  }
  return context;
}

function useForm(): [FormState, Dispatch] {
  return [useFormState(), useFormDispatch()];
}

export { FormStateProvider, useForm };
