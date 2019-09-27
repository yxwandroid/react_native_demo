// import React from 'react';
// import HelloWord from './00_helloword/HelloWord';
//
//
//
// import {
//     StackNavigator,
// } from 'react-navigation';
//
// export default class  App = StackNavigator({
//     Main: {screen: HelloWord},
//     Profile: {screen: HelloWord},
// });
//
//
// import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
//
// // import { createStackNavigator } from 'react-navigation-stack';
// //
// // class HomeScreen1 extends React.Component {
// //     render() {
// //         return (
// //             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //                 <Text>Home Screen</Text>
// //             </View>
// //         );
// //     }
// // }
// //
// // const AppNavigator = createStackNavigator({
// //     Home: {
// //         screen: HomeScreen1,
// //     },
// // });
// //
// // export default createAppContainer(AppNavigator);
// //
// //
// // const AppContainer = createAppContainer(AppNavigator);
// //
// //
// //
// // export default class App extends React.Component {
// //     render() {
// //         return <AppContainer/>;
// //     }
// // }
// // const MainScreenNavigator = TabNavigator({
// //
// //         Home: {
// //             screen: HomePage,
// //         },
// //         Certificate: {
// //             screen: MinePage,
// //         },
// //     },
// //     {
// //         lazy: true,
// //         tabBarPosition: 'bottom',
// //         tabBarOptions: {
// //             activeTintColor: '#3e9ce9',
// //             inactiveTintColor: '#999999',
// //             showIcon: true,
// //             style: {
// //                 backgroundColor: '#fff'
// //             },
// //             indicatorStyle: {
// //                 opacity: 0
// //             },
// //             tabStyle: {
// //                 padding: 0
// //             }
// //         }
// //     }
// // );
// //
// // export const App = StackNavigator({
// //     //首页 添加新的功能的时候就在这个界面添加跳转逻辑
// //     Home: {
// //         screen: HomeScreen,
// //         navigationOptions: {
// //             headerTitle: 'Home',
// //         },
// //     },
// //
// //     HelloWord: {
// //         screen: HelloWord,
// //         navigationOptions: {
// //             headerTitle: 'HelloWord',
// //         },
// //     },
// //     ImageDemo: {
// //         screen: ImageDemo,
// //         navigationOptions: {
// //             headerTitle: 'Image',
// //         },
// //     },
// //
// //     CountDown: {
// //         screen: CountDown,
// //         navigationOptions: {
// //             headerTitle: '倒计时',
// //         },
// //     },
// //
// //     Likes: {
// //         screen: Likes,
// //         navigationOptions: {
// //             headerTitle: '点赞',
// //         },
// //     },
// //
// //     FlexDiceTest: {
// //         screen: FlexDiceTest,
// //         navigationOptions: {
// //             headerTitle: 'flex 布局总结',
// //         },
// //     },
// //
// //     FetchNetData: {
// //         screen: FetchNetData,
// //         navigationOptions: {
// //             headerTitle: 'Fetch 网络请求 ',
// //         },
// //     },
// //
// //
// //
// //     // Demo1 界面之间传递数据 使用
// //     NavigationDemo1: {
// //         screen: React_NavigationDemo1,
// //         navigationOptions: {
// //             headerTitle: 'Navigation传递数据',
// //         },
// //     },
// //
// //     //Tab 跳转 stack 使用
// //     Chat: {
// //         screen: ChatScreen,
// //         navigationOptions: {
// //             headerTitle: 'Tab 跳转 stack 使用',
// //         },
// //     },
// //
// //     // stack 嵌套 tab 进行页面跳转
// //     HomePage: {
// //         screen: MainScreenNavigator,
// //         navigationOptions: {
// //
// //             headerTitle: 'TabStackDrawer 使用',
// //         },
// //     },
// //
// //
// //     GlobaStoragelUtil:{
// //         screen: StorageDemo,
// //         navigationOptions:{
// //             headerTitle:'全局变量和是 Storage 的使用',
// //         }
// //     },
// //
// //
// //     ScrollableTabDemo1:{
// //         screen: ScrollableTabDemo1,
// //         navigationOptions:{
// //             headerTitle:'ScrollableTabView使用',
// //         }
// //     },
// //     ListViewDemo:{
// //         screen: ListViewDemo,
// //         navigationOptions:{
// //             headerTitle:'ScrollableTabView使用',
// //         }
// //     },
// //     FlatListDemo:{
// //         screen: FlatListDemo,
// //         navigationOptions:{
// //             headerTitle:'FlatList使用',
// //         }
// //     },
// //     PropStateDemo:{
// //         screen: PropStateDemo,
// //         navigationOptions:{
// //             headerTitle:'PropState的区别',
// //         }
// //     },
// //
// //     I18nDemo:{
// //         screen: I18nDemo,
// //         navigationOptions:{
// //             headerTitle:'国际化 ',
// //         }
// //     },
// //     Air_anim_shape:{
// //         screen: Air_anim_shape,
// //         navigationOptions:{
// //             headerTitle:'AnimShape',
// //         }
// //     },
// //     MyResponder:{
// //         screen: MyResponder,
// //         navigationOptions:{
// //             headerTitle:'Responder使用',
// //         }
// //     },
// //     CreateQRCode:{
// //         screen: CreateQRCode,
// //         navigationOptions:{
// //             headerTitle:'生成二维码',
// //         }
// //     },
// //
// //     ScreenOn:{
// //         screen: ScreenOn,
// //         navigationOptions:{
// //             headerTitle:'屏幕常亮',
// //         }
// //     }
// //
// //
// // });
