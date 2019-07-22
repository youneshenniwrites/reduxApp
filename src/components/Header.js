import React from "react";
import { 
  View,
  StyleSheet
} from "react-native";

import { TextInput, Button } from 'react-native-paper';

const Header = (props) => (
  <View style={styles.container}>
    <TextInput
      label='Ingredient'
      mode="outlined"
    />
    <Button
      icon="add"
      mode="contained"
      onPress={() => console.log('Pressed')}
      style={styles.button}>
      add 
    </Button>
  </View>
  )
export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: 10,
    padding: 10
  }
});