import { createBrowserRouter } from 'react-router-dom';

import { baseLayout } from 'app/layouts/baseLayout';

import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { SettingsPage } from 'pages/SettingsPage';

// import { appStore } from './appStore';

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    errorElement: <div>error</div>,
    loader: async () => {
      return 'loading';
    },
    // loader: async () => {
    //   return await featureToggleLoader(appStore.dispatch);
    // },
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
