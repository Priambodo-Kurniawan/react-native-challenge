import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/store/configureStore';
import AppContainer from './app/containers/AppContainer'

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <AppContainer />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ReactNativeApp', () => App);
