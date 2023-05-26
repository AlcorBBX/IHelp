import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => Story) => (
  //@ts-ignore
  <BrowserRouter>{story()}</BrowserRouter>
);
