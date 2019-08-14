import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "./AppBar";
import UserDetails from "./UserDetails";
import InterestPicker from "./InterestPicker";
import TypePicker from "./TypePicker";
import { useForm, register } from "../context/form";
import useLocalStorage from "../hooks/useLocalStorage";
import * as actions from "../actionTypes";
import * as R from "ramda";

const App: React.FC = () => {
  const [state, dispatch] = useForm();
  const [user] = useLocalStorage("user", JSON.stringify({}));

  const handleSubmit = React.useCallback(
    event => {
      event.preventDefault();
      register(dispatch, state);
    },
    [dispatch, state]
  );

  console.log(user);

  React.useEffect(() => {
    if (user) {
      dispatch({ type: actions.SET_USER, payload: user });
    }
  }, [user, dispatch]);

  if (!R.isEmpty(user)) {
    return (
      <div className="App">
        <Router>
          <AppBar />
          <Switch>
            <Route path="/" exact render={() => <UserDetails />} />
            <Route path="/interests/" render={() => <InterestPicker />} />
            <Route
              path="/type/"
              render={() => <TypePicker submit={handleSubmit} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }

  return <div>Error: User not register in the platform</div>;
};

export default App;
