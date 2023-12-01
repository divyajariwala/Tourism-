export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';
export const CATEGORY_FAILURE = 'CATEGORY_FAILURE';

export const fetchCategorySuccess = <T>(data: T) => ({
  type: CATEGORY_SUCCESS as typeof CATEGORY_SUCCESS,
  payload: data,
});

export const fetchCategoryFailure = (error: any) => ({
  type: CATEGORY_FAILURE as typeof CATEGORY_FAILURE,
  payload: error,
});

