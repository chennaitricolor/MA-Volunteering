import * as actions from "../actionTypes";
import { register as registerApi } from "../api";
import { FormState, Dispatch } from "../types";

const register = async (dispatch: Dispatch, state: FormState) => {
  dispatch({ type: actions.REGISTRATION_REQUEST });
  try {
    const {
      currentUser,
      interests,
      notify,
      type,
      anyInterestFlag,
      prevOrg
    } = state;
    const { email } = currentUser;
    console.log("Submitted Data", {
      email,
      interests,
      notify,
      prevOrg,
      term: type,
      anyInterestFlag
    });
    const registeredUser = await registerApi({
      email,
      interests,
      notify,
      prevOrg,
      term: type,
      anyInterestFlag
    });
    dispatch({ type: actions.REGISTRATION_SUCCESS, payload: registeredUser });
  } catch (error) {
    console.log("Error", error);
    dispatch({ type: actions.REGISTRATION_FAILED, payload: error.message });
  }
};

export { register };
