import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
// import rootReducer from './src/redux/reducers/rootReducer'
// import {connect} from 'react-redux';
import Counter from './src/components/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Counter />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
