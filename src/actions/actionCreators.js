import { LIST_ITEMS, NEW_ITEM } from './actionTypes';

export const addItem = item => ({
  type: NEW_ITEM,
  payload: item,
});

export const listItems = () => ({
  type: LIST_ITEMS,
});
