import 'react-native-gesture-handler';
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
// 在 组建中引入css类
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  // navigation.push 会一直添加，尽管当前已经是目标路径
  // navigation.navigation 则会判断当前路径是否已是目标路径，如果是目标路径，则不做任何操作
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to Details.... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </View>
  );
}

// const Stack = createStackNavigator({
//   Details: {
//     Screen: DetailsScreen,

//   },
//   Home: {
//     Screen: HomeScreen,
//   },
// });
const Stack = createStackNavigator();
export const App = () => (
  // NavigationContainer 包含所有的元素，相当于 react-router 中最外层的Router
  <NavigationContainer>
    {
      // Stack.Navigator 负责创建默认导航，相当于 react-router中的 Switch
      // screenOptions 全局配置
    }
    <Stack.Navigator
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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{title: 'Overview'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
