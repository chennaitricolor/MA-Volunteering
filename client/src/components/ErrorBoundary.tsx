import React from "react";
import Error from "./ErrorScreen";

interface State {
  hasError: boolean;
  error: any;
  errorInfo: any;
}
class ErrorBoundary extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);

    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Error errorMessage="Something went wrong. Please try and refresh the page." />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
