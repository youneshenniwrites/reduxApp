import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TextInput, Button, Card, Divider, Title } from 'react-native-paper';

import { addItem } from '../actions/actionCreators';

const Items = props => {
  const [item, setItem] = React.useState('');
  console.log(props.listItems.items);
  const submitItem = () => {
    if (item !== '') {
      props.addItem({ item });
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
        onChangeText={val => setItem(val)}
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
        {props.listItems.items.map(foo => (
          <Card style={styles.itemStyle} key={Math.random()}>
            <Card.Content>
              <Title>{foo}</Title>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => console.log('Removed')}>Remove</Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

Items.prototypes = {
  addItem: PropTypes.func.isRequired,
  listItems: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  listItems: state.items,
});

export default connect(
  mapStateToProps,
  { addItem }
)(Items);

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
