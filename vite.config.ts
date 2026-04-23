import react from '@vitejs/plugin-react-swc';
import path, { dirname } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    outDir: 'dist',
    rolldownOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react-router') || id.match(/[\\/]react[\\/]/)) {
              return 'react-vendor';
            }
            if (id.includes('@mui') || id.includes('@emotion')) {
              return 'mui';
            }
            if (id.includes('@reduxjs') || id.includes('redux') || id.includes('immer') || id.includes('reselect')) {
              return 'redux';
            }
            if (id.includes('fuse.js') || id.includes('react-virtuoso') || id.includes('react-toastify')) {
              return 'utils';
            }
            return 'vendor'; // everything else from node_modules
          }
        },
      },
    },
  },
  server: {
    open: true,
  },
  plugins: [react(), mode === 'analyze' && visualizer({ open: true, gzipSize: true, brotliSize: true })].filter(
    Boolean
  ),
  optimizeDeps: {
    include: ['redux-persist/lib/storage', 'redux-persist/lib/storage/createWebStorage'],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      routes: path.resolve(__dirname, './src/routes'),
      assets: path.resolve(__dirname, './src/assets'),
      utils: path.resolve(__dirname, './src/utils'),
      store: path.resolve(__dirname, './src/store'),
      types: path.resolve(__dirname, './src/types'),
      services: path.resolve(__dirname, './src/services'),
    },
  },
}));
