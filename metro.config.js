const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
    plugins: ['react-native-worklets/plugin'],
       
      
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
