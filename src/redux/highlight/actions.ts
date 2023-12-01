export const HIGHLIGHTS_SUCCESS = 'HIGHLIGHTS_SUCCESS';
export const HIGHLIGHTS_FAILURE = 'HIGHLIGHTS_FAILURE';

export const fetchHighlightsSuccess = <T>(data: T) => ({
  type: HIGHLIGHTS_SUCCESS as typeof HIGHLIGHTS_SUCCESS,
  payload: data,
});

export const fetchHighlightsFailure = (error: any) => ({
  type: HIGHLIGHTS_FAILURE as typeof HIGHLIGHTS_FAILURE,
  payload: error,
});
