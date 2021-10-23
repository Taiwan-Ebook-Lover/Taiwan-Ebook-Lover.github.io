const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@customTypes': path.resolve(__dirname, 'src/assets/types'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@recoil': path.resolve(__dirname, 'src/recoil'),
      '@routes': path.resolve(__dirname, 'src/routes'),
    },
  },
};
