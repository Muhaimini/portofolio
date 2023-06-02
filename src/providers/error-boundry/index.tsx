import { Component } from "react";

import BoundryPage from "^views/errors/Boundry";
import { ErrorBoundryProps, ErrorBoundryState, ErrorInfo } from "./types";

class Boundary extends Component<ErrorBoundryProps, ErrorBoundryState> {
  constructor(props: ErrorBoundryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  static getDerivedStateFromError(_: TypeError) {
    return { hasError: true };
  }

  componentDidCatch(error: TypeError, _: ErrorInfo) {
    if (error) this.setState({ errorMessage: error.message });
  }

  render = () => {
    if (this.state.hasError) {
      return <BoundryPage message={this.state.errorMessage} />;
    }
    return this.props.children;
  };
}

export default Boundary;
