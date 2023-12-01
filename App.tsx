import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/rootReducer'; // Make sure to import your root reducer
import BottomTab from './src/router/BottomTabNavigator';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
