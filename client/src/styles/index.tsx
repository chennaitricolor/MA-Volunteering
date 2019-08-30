import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import Button, { ButtonProps } from "@material-ui/core/Button";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

const StyledRadio = withStyles({
  root: {
    color: "#2C67CB",
    "&$checked": {
      color: "#2C67CB"
    }
  },
  checked: {}
})((props: RadioProps) => <Radio color="default" {...props} />);

const StyledButton = withStyles({
  root: {
    margin: "1rem auto",
    minHeight: "3.5rem",
    background: "#1366D2",
    borderRadius: "3rem",
    width: "90%",
    maxWidth: "23rem",
    height: "2rem",
    fontWeight: "bold",
    color: "#fff"
  },
  label: {
    fontSize: "1rem",
    textTransform: "capitalize"
  },
  disabled: {
    background: "#b3b3b3",
    color: "#bbb"
  }
})((props: ButtonProps) => (
  <Button disableRipple disableFocusRipple color="default" {...props} />
));

const StyledTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#1366D2"
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#1366D2"
      }
    }
  }
})((props: TextFieldProps) => <TextField {...props} />);

export { StyledRadio, StyledButton, StyledTextField };
