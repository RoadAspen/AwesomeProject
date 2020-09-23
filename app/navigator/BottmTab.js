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
    <Text>Page D</Text>
  </View>
);
// 创建底部导航
const BottmTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <BottmTab.Navigator>
      <BottmTab.Screen name="PageA" component={PageA} />
      <BottmTab.Screen name="PageB" component={PageB} />
      <BottmTab.Screen name="PageC" component={PageC} />
      <BottmTab.Screen name="PageD" component={PageD} />
      <BottmTab.Screen name="PageE" component={PageE} />
    </BottmTab.Navigator>
  );
};
export default BottomTabNavigator;
