/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

//
import HomeScreen from './src/screens/HomeScreen';
import DrawerNavigation from './src/screens/DrawerNavigation';

//
import Router from './src/navigator/router';

//
import { Provider } from 'react-redux';
import store from './src/store/index';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>

    );
  }
}

export default App;
