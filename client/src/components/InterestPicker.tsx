import React from "react";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { StyledButton as Button } from "../styles";
import { useForm } from "../context/form";
import { Link } from "react-router-dom";
import * as actions from "../actionTypes";

const useStyles = makeStyles(theme => ({
  root: {
    height: "85%",
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
    color: "#6B6B6B"
  },
  checkbox: {
    paddingRight: "0.2rem",
    color: "#2C67CB",
    "&$checked": {
      color: "#2C67CB"
    }
  }
}));

interface IProps {}

const InterestPicker: React.FC<IProps> = props => {
  const [state, dispatch] = useForm();

  const classes = useStyles();

  const { interests } = state;

  const [choices] = React.useState<Array<string>>([
    "Any one from below",
    "Children and Youth",
    "Civic Sense",
    "Education and Literacy",
    "Environment",
    "Healthcare",
    "People with Disabilities",
    "Road safety and Traffic",
    "Women Empowerment",
    "Old age care "
  ]);

  const handleCheck = React.useCallback(
    (e, x) => {
      const checkedValues =
        interests && interests.includes(x)
          ? interests.filter(c => c !== x)
          : [...interests, x];

      dispatch({ type: actions.SET_INTERESTS, payload: checkedValues });
    },
    [interests, dispatch]
  );

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
            {choices.map((choice: string) => (
              <FormControlLabel
                classes={{ root: classes.field, label: classes.label }}
                key={choice}
                control={
                  <Checkbox
                    className={classes.checkbox}
                    checked={interests.includes(choice)}
                    onChange={e => handleCheck(e, choice)}
                    color="default"
                    value={choice}
                  />
                }
                label={choice}
              />
            ))}
          </FormGroup>
        </FormControl>
        <Link to="/type">
          <Button disabled={interests.length === 0}>Save & Continue</Button>
        </Link>
      </div>
    </div>
  );
};

export default InterestPicker;
