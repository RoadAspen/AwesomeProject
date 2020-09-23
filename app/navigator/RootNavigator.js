import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../views/DetailsScreen';
import HomeScreen from '../views/HomeScreen';
import BottmTabNavigator from './BottmTab';

// Navigation 5.x 中心写法， 创建 一级导航
const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
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
      <Stack.Screen name="Main" component={BottmTabNavigator} />
    </Stack.Navigator>
  );
};

export default RootStack;
