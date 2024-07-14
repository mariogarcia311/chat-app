const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    mainFields: ['react-native', 'browser', 'main'],
    // Si tienes un archivo `metro.config.js` existente, solo añade o modifica el `mainFields`
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
