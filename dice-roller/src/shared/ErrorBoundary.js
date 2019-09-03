import React, { Component } from "react";
import Homepage from "../components/Homepage";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    if (error)
      console.log(error.toString());

    if (info)
      console.log(info.componentStack);
      
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <Homepage />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;