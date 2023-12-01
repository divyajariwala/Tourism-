import { CategoryItem } from '../interfaces';
import createReducer from '../reducerGenerator';
import { CATEGORY_FAILURE, CATEGORY_SUCCESS } from './actions';

export const initialState: CategoryItem[] = []

const otherReducer = createReducer<CategoryItem[]>({
  initialState,
  successType: CATEGORY_SUCCESS,
  failureType: CATEGORY_FAILURE,
});

export default otherReducer;
