/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { AppNavigations } from './src/navigators/news-updater-navigations';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppReducer } from './src/store/reducers/app-main.reducers';
import thunk from 'redux-thunk';

let AppContainer;

const store = createStore(AppReducer, applyMiddleware(thunk));

export class App extends Component {

    constructor(props) {
      super(props);
      this.initAppConfiguration();
    }

    initAppConfiguration = () => {
      AppContainer = createAppContainer(AppNavigations.Nav())
    }
    
    render() {
      return <Provider store={store}>
        <AppContainer /> 
      </Provider>
    }
}
