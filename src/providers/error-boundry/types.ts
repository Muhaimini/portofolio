import { ReactNode } from "react";

export interface ErrorBoundryProps {
  children: ReactNode;
}

export interface ErrorBoundryState {
  hasError: boolean;
  errorMessage: string;
}

export interface ErrorInfo {
  componentStack: string;
}
