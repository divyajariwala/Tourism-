import { HighlightItem } from '../interfaces';
import createReducer from '../reducerGenerator';
import { HIGHLIGHTS_FAILURE, HIGHLIGHTS_SUCCESS } from './actions';

export const initialState: HighlightItem[] = [];

const userReducer = createReducer<HighlightItem[]>({
  initialState,
  successType: HIGHLIGHTS_SUCCESS,
  failureType: HIGHLIGHTS_FAILURE,
});

export default userReducer;
