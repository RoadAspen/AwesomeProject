/**
 * @format
 */
import React from 'react';
import ShoeStore from './app/stores/ShoeStore';
import {Provider} from 'mobx-react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const Root = () => {
  return (
    <Provider ShoeStore={ShoeStore}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => Root);
