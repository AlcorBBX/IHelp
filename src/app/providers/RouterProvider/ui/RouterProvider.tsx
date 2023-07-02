import { RouterProvider as Provider } from 'react-router-dom';

import { appRouter } from '../lib/appRouter';

export const RouterProvider = () => <Provider router={appRouter} />;
