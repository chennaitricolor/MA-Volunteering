import React from "react";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  StyledRadio,
  StyledButton as Button,
  StyledTextField as TextField
} from "../styles";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "../context/form";
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
    gridAutoRows: "auto 1fr 0.1fr"
  },
  group: {
    margin: "2em 0"
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
  checkboxField: {
    margin: "auto 0 0.75em 0"
  },
  prevOrg: {
    backgroud: "#6B6B6B"
  },
  input: {
    margin: theme.spacing(1)
  },
  checkbox: {
    paddingRight: "0.2rem",
    color: "#2C67CB",
    "&$checked": {
      color: "#2C67CB"
    }
  }
}));

interface IProps {
  submit: Function;
}

const TypePicker: React.FC<IProps> = props => {
  const [state, dispatch] = useForm();

  const classes = useStyles();

  const { type, notify, prevOrg } = state;

  const [history, setHistory] = React.useState<boolean>(false);

  const { submit } = props;

  const setNotify = React.useCallback(
    (bool: boolean): void => {
      dispatch({ type: actions.SET_NOTIFY, payload: bool });
    },
    [dispatch]
  );

  const setType = React.useCallback(
    (event): void => {
      dispatch({ type: actions.SET_TYPE, payload: event.target.value });
    },
    [dispatch]
  );

  const handleChange = React.useCallback(
    (event): void => {
      dispatch({ type: actions.SET_PREV_ORG, payload: event.target.value });
    },
    [dispatch]
  );

  return (
    <div className={classes.root}>
      <div className={classes.interestContainer}>
        <div className={classes.heading}>
          <Typography component="h1" className={classes.title}>
            Type of volunteering
          </Typography>
        </div>
        <FormControl>
          <FormGroup>
            <RadioGroup
              aria-label="type"
              name="type"
              className={classes.group}
              value={type}
              onChange={e => setType(e)}
            >
              <FormControlLabel
                classes={{ root: classes.field, label: classes.label }}
                value="onetime"
                control={<StyledRadio />}
                label="One time (few hours a day)"
              />
              <FormControlLabel
                classes={{ root: classes.field, label: classes.label }}
                value="shortterm"
                control={<StyledRadio />}
                label="Short term (1-6 months)"
              />
              <FormControlLabel
                classes={{ root: classes.field, label: classes.label }}
                value="longterm"
                control={<StyledRadio />}
                label="Long term (more than 6 months)"
              />
            </RadioGroup>
            <FormControlLabel
              classes={{ root: classes.checkboxField, label: classes.label }}
              control={
                <Checkbox
                  className={classes.checkbox}
                  checked={history}
                  onChange={e => setHistory(!history)}
                  color="default"
                />
              }
              label="I have vounteered in the past"
            />
            {history && (
              <FormControl>
                <TextField
                  label="Volunteered Organisation"
                  className={classes.input}
                  value={prevOrg}
                  onChange={e => handleChange(e)}
                  margin="normal"
                  variant="outlined"
                />
              </FormControl>
            )}
            <FormControlLabel
              classes={{ root: classes.checkboxField, label: classes.label }}
              control={
                <Checkbox
                  className={classes.checkbox}
                  checked={notify}
                  onChange={e => setNotify(!notify)}
                  color="default"
                />
              }
              label="Notify on oppurtunity"
            />
          </FormGroup>
        </FormControl>
        <Button disabled={history && !prevOrg} onClick={e => submit(e)}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default TypePicker;
