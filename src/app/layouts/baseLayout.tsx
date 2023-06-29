import { LayoutHeader } from 'widgets/LayoutHeader';
import { Sidebar } from 'widgets/Sidebar';

import { Button } from 'shared/ui/Button';
import { Layout } from 'shared/ui/Layout';

export const baseLayout = (
  <Layout
    sidebarSlot={<Sidebar />}
    // headerSlot={<LayoutHeader rightContentSlot={<LayoutProfileCard />} />}
    headerSlot={<LayoutHeader rightContentSlot={<Button>Log in</Button>} />}
  />
);
