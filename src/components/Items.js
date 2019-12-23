/* eslint-disable react/prop-types */
import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { TextInput, Button, Card, Title } from 'react-native-paper';

import { addItem, removeItem } from '../actions/actionCreators';
import {
  Container,
  CardItem,
  ButtonItem,
  DividerItem,
} from './styledComponents';

const Items = ({ list, add, remove }) => {
  const [itemName, setItemName] = React.useState('');

  const submitItem = () => {
    if (itemName !== '') {
      add({ item: itemName });
      setItemName('');
    } else {
      return 0;
    }
  };

  return (
    <Container>
      <TextInput
        label="Ingredient"
        mode="outlined"
        autoCorrect={false}
        autoCapitalize="none"
        value={itemName}
        onChangeText={val => setItemName(val)}
      />
      <ButtonItem mode="contained" onPress={() => submitItem()}>
        add items
      </ButtonItem>
      <DividerItem />
      <ScrollView>
        {list.items.map((item, index) => (
          <CardItem key={index}>
            <Card.Content>
              <Title>{item}</Title>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => remove(item)}>Remove</Button>
            </Card.Actions>
          </CardItem>
        ))}
      </ScrollView>
    </Container>
  );
};

const mapStateToProps = state => ({
  list: state.items,
});

const mapDispatchToProps = { add: addItem, remove: removeItem };

export default connect(mapStateToProps, mapDispatchToProps)(Items);
