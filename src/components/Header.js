import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addItem } from '../actions/actionCreators';

const Header = props => {
  const [item, setItem] = React.useState('');

  const submitItem = () => {
    props.addItem({ item });
  };

  return (
    <View>
      <TextInput
        label="Ingredient"
        mode="outlined"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={val => setItem(val)}
      />
      <Button mode="contained" onPress={submitItem} style={styles.button}>
        add
      </Button>
    </View>
  );
};

Header.prototypes = {
  addItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.items,
});

export default connect(
  mapStateToProps,
  { addItem }
)(Header);

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
});
