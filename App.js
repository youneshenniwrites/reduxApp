import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import { Divider } from 'react-native-paper';
import Header from './src/components/Header';
import ListItems from './src/components/ListItems';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Header />
        <Divider style={styles.divider} />
        <ListItems />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  divider: {
    backgroundColor: '#f58d',
    height: 1.5,
  },
});
