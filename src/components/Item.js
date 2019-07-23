import React from 'react';
import { StyleSheet } from 'react-native';

import { Button, Card, Title } from 'react-native-paper';

const Item = props => (
  <Card style={styles.item}>
    <Card.Content>
      <Title>5 eggs</Title>
    </Card.Content>
    <Card.Actions>
      <Button>Remove</Button>
    </Card.Actions>
  </Card>
);
export default Item;

const styles = StyleSheet.create({
  item: {
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f58d',
  },
});
