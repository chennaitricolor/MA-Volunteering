import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import AppBar from "./AppBar";
import UserDetails from "./UserDetails";
import InterestPicker from "./InterestPicker";
import TypePicker from "./TypePicker";
import Success from "./SuccessScreen";
import Error from "./ErrorScreen";
import { useForm } from "../context/form";
import { register } from "../context/actions";
import Loading from "./LoadingScreen";
import { getUserDetails } from "../api";
import useLocalStorage from "../hooks/useLocalStorage";
import * as actions from "../actionTypes";
import { transformUserDetails } from "../utils";
import * as R from "ramda";

const App: React.FC = () => {
  const [state, dispatch] = useForm();

  const [loading, setLoading] = React.useState<boolean>(true);

  const [user] = useLocalStorage("user", JSON.stringify({}));

  const { currentUser, interests, anyInterestFlag, success } = state;

  const handleSubmit = React.useCallback(
    event => {
      event.preventDefault();
      register(dispatch, state);
    },
    [dispatch, state]
  );

  React.useEffect(() => {
    const fetchUserDetails = async (email: string) => {
      const volunteerDetails = await getUserDetails(email);

      if (!R.isNil(volunteerDetails) && !R.isEmpty(volunteerDetails)) {
        dispatch({
          type: actions.SET_EXISTING_USER_DETAILS,
          payload: volunteerDetails
        });
      }
    };

    if (!R.isEmpty(user)) {
      const userData = transformUserDetails(user);

      dispatch({ type: actions.SET_USER, payload: userData });

      fetchUserDetails(userData.email);

      setLoading(false);
    }
  }, [user, dispatch]);

  if (loading) {
    return <Loading />;
  } else if (success) {
    return <Success />;
  } else if (currentUser && currentUser.email) {
    return (
      <div className="App">
        <Router>
          <AppBar />
          <Switch>
            <Route path="/" exact render={() => <UserDetails />} />
            <Route
              path="/interests/"
              render={() =>
                currentUser.email ? <InterestPicker /> : <Redirect to="/" />
              }
            />
            <Route
              path="/type/"
              render={() =>
                anyInterestFlag || interests.length > 0 ? (
                  <TypePicker submit={handleSubmit} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Router>
      </div>
    );
  }

  return <Error />;
};

export default App;
