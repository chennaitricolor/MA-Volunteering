import * as actions from "../actionTypes";
import { FormState, Dispatch } from "../types";

const register = (dispatch: Dispatch, state: FormState) => {
  dispatch({ type: actions.REGISTRATION_REQUEST });
  try {
    const { currentUser, interests, notify, type } = state;
    const { email } = currentUser;
    console.log("Submitted Data", { email, interests, notify, term: type });
    dispatch({ type: actions.REGISTRATION_SUCCESS });
  } catch (error) {
    dispatch({ type: actions.REGISTRATION_FAILED, payload: error.message });
  }
};

export { register };
