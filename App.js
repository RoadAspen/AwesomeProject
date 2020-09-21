import 'react-native-gesture-handler';
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createCompatNavigatorFactory} from '@react-navigation/compat';
import DetailsScreen from './app/views/DetailsScreen';
import HomeScreen from './app/views/HomeScreen';
global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
// 在 组建中引入css类

const Stack = createStackNavigator();
export const App = () => (
  // NavigationContainer 包含所有的元素，相当于 react-router 中最外层的Router
  <NavigationContainer>
    {
      // Stack.Navigator 负责创建默认导航，相当于 react-router中的 Switch
      // screenOptions 全局配置
    }
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: '测试题',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* 相当于 react-router中的Route */}
      <Stack.Screen
        name="Details"
        options={{title: <Text>1234</Text>, headerTitleAlign: 'center'}}
        component={DetailsScreen}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
