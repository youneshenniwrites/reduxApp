import { ADD_ITEM } from '../actions/actionTypes';

const initialState = {
  items: ['apples', 'bananas', 'oranges', 'pears'],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload.item, ...state.items],
      };
    default:
      return state;
  }
}
