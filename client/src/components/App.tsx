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
import { useForm } from "../context/form";
import { register } from "../context/actions";
import useLocalStorage from "../hooks/useLocalStorage";
import * as actions from "../actionTypes";
import * as R from "ramda";

const App: React.FC = () => {
  const [state, dispatch] = useForm();

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
    if (!R.isEmpty(user)) {
      dispatch({ type: actions.SET_USER, payload: user });
    }
  }, [user, dispatch]);

  if (success) {
    return <div>User successfully registered as a volunteer!</div>;
  } else if (user && user.email) {
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

  return <div>Error: User not register in the CEP platform</div>;
};

export default App;
