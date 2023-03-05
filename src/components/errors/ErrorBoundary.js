/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="center-content">
          <div className="error-box">
            <p>We are sorry — something went wrong.</p>
            <p>Our team has been notified.</p>

            <p>
              Click here to return <a href="/">Home</a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
