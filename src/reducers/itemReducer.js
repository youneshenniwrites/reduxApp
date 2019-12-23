import { ADD_ITEM, REMOVE_ITEM } from '../actions/actionTypes';

const initialState = {
  items: ['Apples', 'Bananas', 'Oranges'],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload.item, ...state.items],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload),
      };
    default:
      return state;
  }
}
