import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    padding: "5rem 1rem"
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    lineHeight: "2rem",
    textAlign: "center",
    margin: "2rem"
  },
  progress: {
    color: "#1366D2"
  }
}));

const LoadingScreen: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.progress} />
      <Typography component="h1" className={classes.title}>
        Loading!
      </Typography>
    </div>
  );
};

export default LoadingScreen;
