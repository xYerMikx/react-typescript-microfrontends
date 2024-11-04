import { Component, ErrorInfo, ReactNode } from 'react';

import { CustomError } from './error/CustomError';

type EBState = {
  hasError: boolean;
  error: Error | null;
};

type EBProps = {
  children: ReactNode;
};

export class ErrorBoundary extends Component<EBProps, EBState> {
  constructor(props: EBProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): EBState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <CustomError />;
    }

    return this.props.children;
  }
}
