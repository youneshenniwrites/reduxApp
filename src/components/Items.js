import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { TextInput, Button, Card, Title } from 'react-native-paper';

import { addItem, removeItem } from '../actions/actionCreators';
import {
  Container,
  CardItem,
  ButtonItem,
  DividerItem,
} from './styledComponents';

const Items = () => {
  const [itemName, setItemName] = useState('');

  const list = useSelector(state => state.items);

  const dispatch = useDispatch();

  const add = () => {
    if (itemName !== '') {
      dispatch(addItem({ item: itemName }));
      setItemName('');
    }
  };

  const remove = item => dispatch(removeItem(item));

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
      <ButtonItem mode="contained" onPress={add}>
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

export default Items;
