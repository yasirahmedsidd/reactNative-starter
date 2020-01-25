import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
// import rootReducer from './src/redux/reducers/rootReducer'
// import {connect} from 'react-redux';
import Counter from './src/components/Counter';
import UsersList from './src/components/UsersList';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        {/* <Counter /> */}
        <UsersList />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
