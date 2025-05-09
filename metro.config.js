const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const baseConfig = {
  // You can add custom settings here if needed
};

const mergedConfig = mergeConfig(getDefaultConfig(__dirname), baseConfig);

// Wrap the merged config with Reanimated's wrapper
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
