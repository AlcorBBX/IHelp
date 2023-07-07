import { createBrowserRouter } from 'react-router-dom';

import { baseLayout } from 'app/layouts/baseLayout';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { SettingsPage } from 'pages/SettingsPage';

import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

// import { appStore } from './appStore';

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    // errorElement: <div>error</div>,
    loader: async () => {
      return <PageLoader />;
    },
    // loader: async () => {
    //   return await featureToggleLoader(appStore.dispatch);
    // },
    children: [
      {
        path: '/',
        element: (
          <ErrorBoundary>
            <MainPage />
          </ErrorBoundary>
        ),
      },
      {
        path: '/settings',
        element: (
          <ErrorBoundary>
            <SettingsPage />
          </ErrorBoundary>
        ),
      },
      {
        path: '/profile/:profileId',
        element: (
          <ErrorBoundary>
            <ProfilePage />
          </ErrorBoundary>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
