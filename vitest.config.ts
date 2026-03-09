import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import type { Plugin } from 'vite';

function imageMock(): Plugin {
  return {
    name: 'image-mock',
    enforce: 'pre',
    load(id) {
      if (/\.(jpg|jpeg|png|gif|webp|svg|avif)(\?.*)?$/.test(id)) {
        return `export default { src: "${id.split('/').pop()}" };`;
      }
    },
  };
}

export default defineConfig({
  plugins: [imageMock(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      'react-icons/si': path.resolve(__dirname, '__tests__/__mocks__/react-icons-si.ts'),
      'react-icons/tb': path.resolve(__dirname, '__tests__/__mocks__/react-icons-tb.ts'),
    },
  },
  test: {
    environment: 'jsdom',
  },
});
