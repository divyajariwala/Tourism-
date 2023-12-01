import { ActivityItem } from '../interfaces';
import createReducer from '../reducerGenerator';
import { ACTIVITIES_FAILURE, ACTIVITIES_SUCCESS } from './actions';

export const initialState: ActivityItem = {
  name: '',
  description: '',
  image: '',
  activities: []
}

const activitiesReducer = createReducer<ActivityItem>({
  initialState,
  successType: ACTIVITIES_SUCCESS,
  failureType: ACTIVITIES_FAILURE,
});

export default activitiesReducer;
