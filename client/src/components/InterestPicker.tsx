import React from "react";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./NavButton";
import { useForm } from "../context/form";
import * as actions from "../actionTypes";
import { getInterests } from "../api";
import { Interest } from "../types";

const useStyles = makeStyles(theme => ({
  root: {
    height: "92%",
    background: "#1366D2"
  },
  heading: {
    padding: "14px 8px 0 20px"
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    lineHeight: "2rem",
    textAlign: "left"
  },
  interestContainer: {
    height: "100%",
    borderRadius: "30px 30px 0px 0px",
    background: "#F8F8F8",
    display: "grid",
    gridAutoRows: "auto 1fr auto"
  },
  interests: {
    paddingLeft: "0.8rem",
    height: "100%"
  },
  field: {
    margin: "auto 0"
  },
  label: {
    fontWeight: "normal",
    fontSize: "arem",
    lineHeight: "2rem",
    color: "#6B6B6B",
    textTransform: "capitalize"
  },
  checkbox: {
    paddingRight: "0.2rem",
    color: "#2C67CB",
    "&$checked": {
      color: "#2C67CB"
    }
  },
  error: {
    color: "red",
    margin: "2em"
  }
}));

interface IProps {}

const InterestPicker: React.FC<IProps> = props => {
  const [state, dispatch] = useForm();

  const classes = useStyles();

  const { interests, anyInterestFlag } = state;

  const [error, setError] = React.useState<string>("");

  const [choices, setChoices] = React.useState<Array<Interest>>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getInterests();
        setChoices(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const handleCheck = React.useCallback(
    (e, x: number) => {
      const checkedValues =
        interests && interests.includes(x)
          ? interests.filter(c => c !== x)
          : [...interests, x];

      dispatch({ type: actions.SET_INTERESTS, payload: checkedValues });
      dispatch({ type: actions.SET_ANY_INTEREST, payload: false });
    },
    [interests, dispatch]
  );

  const handleAnyInterest = React.useCallback(
    e => {
      dispatch({ type: actions.SET_ANY_INTEREST, payload: !anyInterestFlag });
      dispatch({ type: actions.SET_INTERESTS, payload: [] });
    },
    [anyInterestFlag, dispatch]
  );

  if (error) {
    return <div className={classes.error}>{error}</div>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.interestContainer}>
        <div className={classes.heading}>
          <Typography component="h1" className={classes.title}>
            Areas of interest
          </Typography>
        </div>
        <FormControl component="fieldset">
          <FormGroup className={classes.interests}>
            <FormControlLabel
              classes={{ root: classes.field, label: classes.label }}
              key="any"
              control={
                <Checkbox
                  className={classes.checkbox}
                  checked={anyInterestFlag}
                  onChange={e => handleAnyInterest(e)}
                  color="default"
                  value={anyInterestFlag}
                />
              }
              label="Any from below"
            />
            {choices &&
              choices.length > 0 &&
              choices.map((choice: Interest) => (
                <FormControlLabel
                  classes={{ root: classes.field, label: classes.label }}
                  key={choice.id}
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      checked={interests.includes(choice.id)}
                      onChange={e => handleCheck(e, choice.id)}
                      color="default"
                      value={choice.id}
                    />
                  }
                  label={choice.name}
                />
              ))}
          </FormGroup>
        </FormControl>
        <Button
          to="/type"
          disabled={!anyInterestFlag && interests.length === 0}
        >
          Save & Continue
        </Button>
      </div>
    </div>
  );
};

export default InterestPicker;
