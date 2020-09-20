import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
// 在 组建中引入css类
const App = () => {
  const [state, setState] = useState({data: [], loaded: false});
  const [url, setUrl] = useState('http://localhost:8080/movie/');
  const fetchData = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        setState((state) => ({
          //把数据添加到 data 里（注意这里使用了数组的 concat 方法生成新数组，不能直接在原数组上 push！）：
          data: state.data.concat(responseData.movies),
          loaded: true,
        }));
      })
      .catch((error) => {
        console.log(error.message);
      })
      .done();
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <FlatList
      data={state.data}
      renderItem={({item}) => (
        <View style={styles.container}>
          <Image
            source={{uri: item.posters.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.year}>{item.year}</Text>
          </View>
        </View>
      )}
      style={styles.list}
      keyExtractor={(item) => item.id}
    />
  );
};

// 创建一个css类
const styles = StyleSheet.create({
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },

  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1, //让rightContainer在父容器中占据 Image 之外剩下的全部空间
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});
export default App;
