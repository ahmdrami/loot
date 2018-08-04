import { REQUEST_DATA, RECEIVE_DATA, GET_ID_ITEM } from "../actions";
import { combineReducers } from "redux";
const AppState = (
  state = {
    data: [],
    isFetching: false
  },
  action
) => {
  switch (action.type) {
    case REQUEST_DATA: {
      return {
        ...state,
        isFetching: true
      };
    }
    case RECEIVE_DATA: {
      return {
        isFetching: false,
        data: action.result
      };
    }
    case GET_ID_ITEM: {
       return {
          ...state,
          item: state.data
          .find( ({id}) => id === action.id)
       }
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  AppState
});

export default rootReducer;
