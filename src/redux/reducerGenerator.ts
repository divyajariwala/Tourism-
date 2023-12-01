interface ReducerConfig<T> {
  initialState: T;
  successType: string;
  failureType: string;
}

const createReducer = <T>(config: ReducerConfig<T>) => {
  const { initialState, successType, failureType } = config;

  return (state = initialState, action: any): T => {
    switch (action.type) {
      case successType:
        return action.payload;
      case failureType:
        // Handle failure action
        return state;
      default:
        return state;
    }
  };
};

export default createReducer;

