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
const baseConfig = getDefaultConfig(__dirname);

// Additional custom configuration options can be added here
const customConfig = {
  // Your custom Metro options, if any
};

// Merge default and custom configurations
const mergedConfig = mergeConfig(baseConfig, customConfig);

// Wrap the merged configuration with Reanimated's configuration
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
