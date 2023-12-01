import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';

export const callApi = async <T>(
  url: string,
  successActionCreator: (data: T) => any,
  failureActionCreator: (error: any) => any,
  dispatch: Dispatch
) => {
  try {
    const response: AxiosResponse<T> = await axios.get(`https://web-dev.dev.kimo.ai/v1/${url}`);
    dispatch(successActionCreator(response.data));
  } catch (error) {
    dispatch(failureActionCreator(error));
  }
};
