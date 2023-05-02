import React from 'react';

import { I18NProvider, useI18N } from '@ayub-begimkulov/i18n';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'app/App';
// import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider/index';
import 'app/styles/index.scss';

import { i18n } from 'shared/config/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    {/* <StoreProvider> */}
    <ThemeProvider>
      <I18NProvider i18n={i18n}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </I18NProvider>
    </ThemeProvider>
    {/* </StoreProvider> */}
  </BrowserRouter>,
);
