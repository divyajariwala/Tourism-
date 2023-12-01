import { LoadingState } from '../interfaces';
import createReducer from '../reducerGenerator';
import { START_LOADING, STOP_LOADING } from './actions';

export const initialState: LoadingState = {
  isLoading: true
}

const loadingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      // Add a default case to return the current state
      return state;
  }
};

export default loadingReducer;