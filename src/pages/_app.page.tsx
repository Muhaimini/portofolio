import React from "react";
import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "react-query";
import { QUERY_CONFIG } from "^services/constants";

import BaseLayoutProvider from "^providers/base-layout";
import ErrorBoundry from "^providers/error-boundry";
import SnackbarProvider from "^providers/snackbar";
import ModalProvider from "^providers/modal";

import "^styles/index.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient(QUERY_CONFIG));

  return (
    <BaseLayoutProvider>
      <ErrorBoundry>
        <SnackbarProvider>
          <QueryClientProvider client={queryClient}>
            <ModalProvider>
              <Component {...pageProps} />
            </ModalProvider>
          </QueryClientProvider>
        </SnackbarProvider>
      </ErrorBoundry>
    </BaseLayoutProvider>
  );
};

export default App;
