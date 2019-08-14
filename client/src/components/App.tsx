import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./AppBar";
import UserDetails from "./UserDetails";
import InterestPicker from "./InterestPicker";
import TypePicker from "./TypePicker";
import { useForm, register } from "../context/form";
import useLocalStorage from "../hooks/useLocalStorage";
import * as actions from "../actionTypes";

const App: React.FC = () => {
  const [state, dispatch] = useForm();
  const [user] = useLocalStorage("user", JSON.stringify({}));

  const { currentUser, loading } = state;

  const handleSubmit = React.useCallback(
    event => {
      event.preventDefault();
      register(dispatch, state);
    },
    [dispatch, state]
  );

  React.useEffect(() => {
    if (user) {
      dispatch({ type: actions.SET_USER, payload: user });
    }
  }, [user, dispatch]);

  return (
    <div className="App">
      {user && (
        <Router>
          <AppBar />
          {!loading && currentUser && (
            <Switch>
              <Route
                path="/"
                exact
                render={() => <UserDetails user={currentUser} />}
              />
              <Route path="/interests/" render={() => <InterestPicker />} />
              <Route
                path="/type/"
                render={() => <TypePicker submit={handleSubmit} />}
              />
            </Switch>
          )}
        </Router>
      )}
    </div>
  );
};

export default App;
