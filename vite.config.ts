import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig(({ mode }) => {
  // Ref: https://github.com/vitejs/vite/issues/3105#issuecomment-939703781
  const env = loadEnv(mode, 'env');
  const htmlPlugin = () => ({
    name: 'html-transform',
    transformIndexHtml: (html: string) =>
      html.replace(/<%=\s*([a-zA-Z_]+)\s*%>/g, (_match, variableName) => env[variableName]),
  });

  return {
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
    plugins: [
      react(),
      checker({
        eslint: {
          files: ['./src'],
          extensions: ['.tsx', '.ts'],
        },
      }),
      htmlPlugin(),
    ],
    build: {
      outDir: 'build',
    },
    server: {
      open: '/',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@api': path.resolve(__dirname, 'src/api'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@customTypes': path.resolve(__dirname, 'src/assets/types'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@recoil': path.resolve(__dirname, 'src/recoil'),
        '@routes': path.resolve(__dirname, 'src/routes'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  };
});
