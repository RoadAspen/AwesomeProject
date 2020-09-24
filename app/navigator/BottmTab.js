import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import RootStack from './RootStack';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const PageA = ({navigation}) => (
  <View style={styles.view}>
    <Text>Page A</Text>
    <Button title="Go to Home" onPress={() => navigation.push('Home')} />
  </View>
);

const PageB = (props) => (
  <View style={styles.view}>
    <Text>Page B</Text>
  </View>
);

const PageC = (props) => (
  <View style={styles.view}>
    <Text>Page C</Text>
  </View>
);

const PageD = (props) => (
  <View style={styles.view}>
    <Text>Page D</Text>
  </View>
);

const PageE = (props) => (
  <View style={styles.view}>
    <Text>Page E</Text>
  </View>
);
// 创建底部导航
const BottmBottomTabNavigatorTab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <BottmBottomTabNavigatorTab.Navigator>
      <BottmBottomTabNavigatorTab.Screen name="PageA" component={PageA} />
      <BottmBottomTabNavigatorTab.Screen name="PageB" component={PageB} />
      <BottmBottomTabNavigatorTab.Screen name="PageC" component={PageC} />
      <BottmBottomTabNavigatorTab.Screen name="PageD" component={PageD} />
      <BottmBottomTabNavigatorTab.Screen name="PageE" component={PageE} />
    </BottmBottomTabNavigatorTab.Navigator>
  );
};
export default BottomTab;
