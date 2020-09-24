import 'react-native-gesture-handler';
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {observable, actions} from 'mobx';
import RootStack from './app/navigator/RootNavigator';
import {observer, inject} from 'mobx-react';

global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
// React Navigation 5.x  写法
// 多页导航
@inject('ShoeStore')
// @observer
class App extends React.Component {
  constructor(props, context) {
    super();
    console.log('props', props);
    console.log('context', context);
  }
  // NavigationContainer 包含所有的元素，相当于 react-router 中最外层的Router
  render() {
    return (
      <NavigationContainer
        onStateChange={() => {
          console.log('RootStack 变化了');
        }}>
        {
          // Stack.Navigator 负责创建默认导航，相当于 react-router中的 Switch
          // screenOptions 全局配置
        }
        <RootStack />
        {/* <BottmTabScreen /> */}
      </NavigationContainer>
    );
  }
}
export default App;
