const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@customTypes': path.resolve(__dirname, 'src/assets/types'),
    },
  },
};
