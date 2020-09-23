import React from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
      <Icon name="rocket" size={100} color="#900" />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />

      <Button title="Go to Main" onPress={() => navigation.push('Main')} />
    </View>
  );
}

export default DetailsScreen;
