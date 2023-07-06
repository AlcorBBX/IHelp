import { LayoutHeader } from 'widgets/LayoutHeader';
import { Sidebar } from 'widgets/Sidebar';

import { HeaderActions } from 'entities/User';

import { Layout } from 'shared/ui/Layout';

export const baseLayout = (
  <Layout
    sidebarSlot={<Sidebar />}
    headerSlot={<LayoutHeader rightContentSlot={<HeaderActions />} />}
  />
);
