import React from "react";
import { 
  View,
  StyleSheet
} from "react-native";

import { TextInput, Button } from 'react-native-paper';

const Header = (props) => (
  <View>
    <TextInput
      label='Ingredient'
      mode="outlined"
    />
    <Button
      mode="contained"
      onPress={() => console.log('Pressed')}
      style={styles.button}>
      add 
    </Button>
  </View>
  )
export default Header;

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 20,
    padding: 10
  }
});