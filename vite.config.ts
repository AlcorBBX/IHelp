import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    EnvironmentPlugin('all', { prefix: 'VITE_' }),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  resolve: {
    alias: {
      app: 'src/app',
      entities: 'src/entities',
      features: 'src/features',
      pages: 'src/pages',
      shared: 'src/shared',
      widgets: 'src/widgets',
    },
  },
});
