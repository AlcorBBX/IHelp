import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    EnvironmentPlugin('all', { prefix: 'VITE_' }),
  ],
  resolve: {
    alias: [
      {
        find: '~antd',
        replacement: 'antd',
      },
    ],
  },
});
