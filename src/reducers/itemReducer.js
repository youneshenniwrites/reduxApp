import { LIST_ITEMS, NEW_ITEM } from '../actions/actionTypes';

const initialState = {
  items: [],
  item: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LIST_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    default:
      return state;
  }
}
