import { combineReducers } from 'redux';
import activitiesReducer from './activities/reducer';

import categoryReducer from './category/reducer';
import errorReducer from './errorReducer';
import highlightReducer from './highlight/reducer';
import { CategoryItem, HighlightItem, ActivityItem, LoadingState } from './interfaces';
import loadingReducer from './loader/reducer';

export interface RootState {
  userDataArray: HighlightItem[];
  categoryDataArray: CategoryItem[];
  activitiesData: ActivityItem;
  error: any;
  loading: LoadingState;
}

const rootReducer = combineReducers<RootState>({
  userDataArray: highlightReducer,
  categoryDataArray: categoryReducer,
  activitiesData: activitiesReducer,
  error: errorReducer,
  loading: loadingReducer,
});

export default rootReducer;
