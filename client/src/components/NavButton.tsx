import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { StyledButton as Button } from "../styles";

interface IProps extends RouteComponentProps<any> {
  to: string;

  disabled?: boolean;
}

const NavButton: React.FC<IProps> = props => {
  const { history, to, disabled, staticContext, ...rest } = props;

  const handleClick = React.useCallback(
    to => {
      history.push(to);
    },
    [history]
  );

  return (
    <Button disabled={disabled} onClick={() => handleClick(to)} {...rest} />
  );
};

export default withRouter(NavButton);
