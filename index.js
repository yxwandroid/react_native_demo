/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import HelloWord from './app/00_helloword/HelloWord';
import ImageDemo from './app/00_helloword/ImageDemo';
import CountDown from './app/00_helloword/CountDown';
import StaticMy from './app/00_helloword/ParamDemo';
import ComponentDemo from './app/00_helloword/ComponentDemo';
import LifeCycleDemo from './app/05_lifecycle_demo/LifeCycleDemo';


//
//
// import {
//     StackNavigator,
// } from 'react-navigation';
//
// const App = StackNavigator({
//     Main: {screen: HelloWord},
//     Profile: {screen: HelloWord},
// });

AppRegistry.registerComponent(appName, () =>HelloWord );
