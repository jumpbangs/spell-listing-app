/* eslint-disable no-restricted-syntax */
import { Component, ReactNode } from 'react';

// Define the props and state types
interface ErrorBoundaryProps {
  children: ReactNode; // The children can be any React element
}

interface ErrorBoundaryState {
  hasError: boolean; // Whether there was an error
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
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
