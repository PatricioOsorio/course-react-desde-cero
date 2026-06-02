import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],
  resolve: {
    alias: {
      '@admin': path.resolve(__dirname, './src/admin'),
      '@auth': path.resolve(__dirname, './src/auth'),
      '@shop': path.resolve(__dirname, './src/shop'),
    },
  },
});
