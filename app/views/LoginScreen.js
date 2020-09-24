import React from 'react';
import {View, Text, Button} from 'react-native';

// 在 组建中引入css类

// Navigation 5.x 中心写法
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>登录界面</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      {/* <RootBottomTab /> */}
    </View>
  );
}

export default HomeScreen;
