import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Header from './src/components/Header';
import Item from './src/components/Item';

import { Divider } from 'react-native-paper';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Divider style={styles.divider}/>
      <Item />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  divider: {
    backgroundColor: '#f58d',
    height: 1.5
  }
});
