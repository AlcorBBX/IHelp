import React from 'react';

import ReactDOM from 'react-dom/client';

import {
  ErrorBoundary,
  I18Provider,
  RouterProvider,
  StoreProvider,
  ThemeProvider,
} from 'app/providers';

import 'shared/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <I18Provider>
        <ThemeProvider>
          <StoreProvider>
            <RouterProvider />
          </StoreProvider>
        </ThemeProvider>
      </I18Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
