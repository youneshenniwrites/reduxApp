import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TextInput, Button, Card, Divider, Title } from 'react-native-paper';

import { addItem, removeItem } from '../actions/actionCreators';

const Items = props => {
  const [itemName, setItemName] = React.useState('');

  const submitItem = () => {
    if (itemName !== '') {
      props.addItem({ item: itemName });
      setItemName('');
    } else {
      return 0;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        label="Ingredient"
        mode="outlined"
        autoCorrect={false}
        autoCapitalize="none"
        value={itemName}
        onChangeText={val => setItemName(val)}
      />
      <Button
        mode="contained"
        onPress={() => submitItem()}
        style={styles.button}
      >
        add
      </Button>
      <Divider style={styles.divider} />
      <ScrollView>
        {props.listItems.items.map((item, index) => (
          <Card style={styles.itemStyle} key={index}>
            <Card.Content>
              <Title>{item}</Title>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => props.removeItem(item)}>Remove</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

Items.prototypes = {
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  listItems: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  listItems: state.items,
});

export default connect(mapStateToProps, { addItem, removeItem })(Items);

const styles = StyleSheet.create({
  itemStyle: {
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f58d',
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  divider: {
    backgroundColor: '#f58d',
    height: 1.5,
  },
});
