// reducer.ts
import { InitialState } from '../initialState';
import { ActionTypes, TOKEN } from '../actions';
import { Reducer } from 'redux';
 
  const reducer: Reducer<InitialState | undefined, ActionTypes> = (state = { country: '', token: '' }, action) => {

  switch (action.type) {
    case TOKEN:  
      return {
        ...state, 
        token: action.payload.token,
        country: action.payload.country
      } 

    default:
      return state;
  }
};

export default reducer;
