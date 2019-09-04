import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./NavButton";
import { useForm } from "../context/form";

const useStyles = makeStyles(theme => ({
  root: {
    height: "85%",
    background: "#1366D2"
  },
  heading: {
    padding: "14px 8px 13px 20px"
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    lineHeight: "2rem"
  },
  profileLink: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    lineHeight: "1.8rem",
    color: "#1366D2",
    textDecoration: "none"
  },
  subTitle: {
    textAlign: "left",
    fontWeight: "normal",
    fontSize: "0.9rem",
    lineHeight: "1.6",
    color: "#6B6B6B"
  },
  userDetailsContainer: {
    height: "100%",
    borderRadius: "30px 30px 0px 0px",
    background: "#F8F8F8",
    display: "grid",
    gridAutoRows: "auto 1fr 0.1fr 0.1fr"
  },
  userDetails: {
    borderRadius: "4px",
    margin: "0 0.6rem",
    padding: "0.9rem 0.8rem",
    textAlign: "left"
  },
  userDetail: {
    marginBottom: "1.5rem"
  },
  fieldName: {
    fontWeight: "bold",
    fontSize: "0.8rem",
    lineHeight: "0.85rem",
    color: "#6B6B6B"
  },
  fieldValue: {
    fontWeight: "normal",
    fontSize: "1.1rem",
    lineHeight: "2rem",
    color: "#000000"
  },
  note: {
    color: "red",
    fontWeight: "bold"
  }
}));

interface IProps {}

const UserDetails: React.FC<IProps> = () => {
  const classes = useStyles();

  const [state] = useForm();

  const { currentUser: user, existingUserId } = state;

  const { name, email, mobileNumber, gender, dateOfBirth } = user;

  return (
    <div className={classes.root}>
      <div className={classes.userDetailsContainer}>
        <div className={classes.heading}>
          <div className={classes.titleContainer}>
            <Typography component="h1" className={classes.title}>
              Your Details
            </Typography>
          </div>
          <Typography variant="subtitle1" className={classes.subTitle}>
            Info is taken from profile. Visit profile to change the details.
          </Typography>
        </div>
        <div className={classes.userDetails}>
          <div className={classes.userDetail}>
            <div className={classes.fieldName}>Full name</div>
            <div className={classes.fieldValue}>{name}</div>
          </div>
          <div className={classes.userDetail}>
            <div className={classes.fieldName}>Mobile no</div>
            <div className={classes.fieldValue}>{mobileNumber}</div>
          </div>
          <div className={classes.userDetail}>
            <div className={classes.fieldName}>Email</div>
            <div className={classes.fieldValue}>{email}</div>
          </div>
          <div className={classes.userDetail}>
            <div className={classes.fieldName}>Gender</div>
            <div className={classes.fieldValue}>{gender}</div>
          </div>
          <div className={classes.userDetail}>
            <div className={classes.fieldName}>Date of birth</div>
            <div className={classes.fieldValue}>{dateOfBirth}</div>
          </div>
        </div>
        {existingUserId && (
          <div>
            <span className={classes.note}>Note: </span>
            You've already registered as a volunteer. Please click on{" "}
            <b>continue </b>
            to modify your interests.
          </div>
        )}
        <a className={classes.profileLink} href="/">
          Profile
        </a>
        <Button to="/interests">Continue</Button>
      </div>
    </div>
  );
};

export default UserDetails;
