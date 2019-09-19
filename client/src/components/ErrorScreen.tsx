import React from "react";
import Typography from "@material-ui/core/Typography";
import { ErrorOutline } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { StyledButton as Button } from "../styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    padding: "5rem 1rem"
  },
  icon: {
    color: "red",
    fontSize: "1.95rem"
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    lineHeight: "2rem",
    textAlign: "center",
    margin: "2rem"
  },
  buttonContainer: {
    display: "flex",
    flexFlow: "column"
  },
  button: {
    maxWidth: "17rem",
    minHeight: "2.5rem"
  }
}));

interface IProps {
  errorMessage: string;
  error?: any;
  errorInfo?: any;
}

const ErrorScreen: React.FC<IProps> = ({ errorMessage, error, errorInfo }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ErrorOutline className={classes.icon} />
      <Typography component="h1" className={classes.title}>
        {errorMessage}
      </Typography>
      {errorInfo && (
        <details style={{ whiteSpace: "pre-wrap" }}>
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </details>
      )}
      <div className={classes.buttonContainer}>
        <Button className={classes.button} href="/">
          Back to App
        </Button>
      </div>
    </div>
  );
};

export default ErrorScreen;
