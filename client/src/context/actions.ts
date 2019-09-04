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
      prevOrg,
      existingUserId
    } = state;
    const { email } = currentUser;

    const registeredUser = await registerApi({
      id: existingUserId,
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
