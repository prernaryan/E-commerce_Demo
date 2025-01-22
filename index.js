/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import './src/constants/language/i18n';

AppRegistry.registerComponent(appName, () => App);
