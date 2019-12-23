import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { Provider } from 'react-redux';

import Items from './src/components/Items';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Items />
      </TouchableWithoutFeedback>
    </Provider>
  );
}
