import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../views/DetailsScreen';
import LoginScreen from '../views/LoginScreen';
import BottmTab from './BottmTab';

// Navigation 5.x 中心写法， 创建 一级导航
const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      {/* 相当于 react-router中的Route */}
      <Stack.Screen
        name="Details"
        options={{title: <Text />}}
        component={DetailsScreen}
      />
      <Stack.Screen
        name="Login"
        options={{title: '登录'}}
        component={LoginScreen}
      />
      <Stack.Screen name="Main" component={BottmTab} />
    </Stack.Navigator>
  );
};

export default RootStack;
