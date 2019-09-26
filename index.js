/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import App from './demo/RootNavigator';
import {name as appName} from './app.json';
import App from './App';
import HelloWord from './app/00_helloword/HelloWord';
// import RootNavigator from './demo';

AppRegistry.registerComponent(appName, () => HelloWord);




