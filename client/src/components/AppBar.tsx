import React from "react";
import StyledAppBar from "@material-ui/core/AppBar";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter, RouteComponentProps } from "react-router";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#E5E5E5"
  },
  appBar: {
    background: "#1366D2",
    boxShadow: "0px 0px 4px rgba(30, 0, 0, 0.25)"
  },
  toolBar: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(3),
    display: "flex"
  },
  iconButton: {
    margin: theme.spacing(0),
    padding: theme.spacing(0)
  },
  backIcon: {
    color: "#fff",
    fontSize: "1.95rem"
  },
  title: {
    color: "#fff",
    fontSize: "24px",
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "bold"
  },
  stepper: {
    background: "#1366D2",
    padding: "1.5rem 1.5rem 1rem 1.5rem"
  },
  stepperLabel: {
    display: "none"
  },
  stepIcon: {
    "& $svg": {
      fill: "#fff"
    }
  }
}));

interface IProps extends RouteComponentProps<any> {}

const AppBar: React.FC<IProps> = props => {
  const classes = useStyles();

  const [activeStep, setActivestep] = React.useState<number>(1);

  const steps = ["/", "/interests", "/type"];

  const { location, history } = props;

  React.useEffect(() => {
    history.replace("/");
    //eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    setActivestep(steps.indexOf(location.pathname) + 1);
  }, [location, steps]);

  return (
    <StyledAppBar className={classes.appBar} position="relative">
      <Stepper
        className={classes.stepper}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((step: string) => (
          <Step key={step}>
            <StepLabel
              classes={{
                labelContainer: classes.stepperLabel,
                iconContainer: classes.stepIcon
              }}
            >
              {""}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </StyledAppBar>
  );
};

export default withRouter(AppBar);
