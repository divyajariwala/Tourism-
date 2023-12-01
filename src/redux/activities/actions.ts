export const ACTIVITIES_SUCCESS = 'ACTIVITIES_SUCCESS';
export const ACTIVITIES_FAILURE = 'ACTIVITIES_FAILURE';

export const fetchActvitiesSuccess = <T>(data: T) => ({
  type: ACTIVITIES_SUCCESS as typeof ACTIVITIES_SUCCESS,
  payload: data,
});

export const fetchActvitiesFailure = (error: any) => ({
  type: ACTIVITIES_FAILURE as typeof ACTIVITIES_FAILURE,
  payload: error,
});

