import React from 'react';

import { I18NProvider } from '@ayub-begimkulov/i18n';
import ReactDOM from 'react-dom/client';
// import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider/index';

import { i18n } from 'shared/config/i18n/i18n';
import 'shared/styles/index.scss';

import { appRouter } from './lib';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <I18NProvider i18n={i18n}>
        <ThemeProvider>
          <RouterProvider router={appRouter} />
        </ThemeProvider>
      </I18NProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
