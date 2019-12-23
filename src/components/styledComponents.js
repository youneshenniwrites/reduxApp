import styled from 'styled-components/native';
import { Button, Card, Divider } from 'react-native-paper';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-left: 16px;
  margin-right: 16px;
`;

export const CardItem = styled(Card)`
  margin-top: 24px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  background-color: #f57c;
`;

export const ButtonItem = styled(Button)`
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 16px;
`;

export const DividerItem = styled(Divider)`
  background-color: #f58d;
  height: 1.5px;
`;
