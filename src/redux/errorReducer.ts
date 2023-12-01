import { AnyAction } from 'redux';

const initialState: any = null; // You can initialize the error state with null or an appropriate initial value

const errorReducer = (state = initialState, action: AnyAction) => {
  // Handle error actions here, if needed
  return state;
};

export default errorReducer;
