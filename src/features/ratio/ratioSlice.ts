import { createSlice } from '@reduxjs/toolkit';
import data from './data';

type Item = {
  value: number;
  name: string;
  meta: string;
};
type Status = 'INITIAL' | 'REQUEST' | 'RECEIVE' | 'FAILURE';
type State = {
  list: Item[];
  error: any;
  status: Status;
};
const ratioState: State = {
  list: [],
  error: {},
  status: 'INITIAL',
}

export const ratioSlice = createSlice({
  name: 'ratio',
  initialState: ratioState,
  reducers: {
    requestList: (state) => {
      console.log('requestList');
      state.list = [];
      state.error = {};
      state.status = 'REQUEST';
    },
    receiveList: (state, action) => {
      console.log('receiveList');
      state.list = action.payload;
      state.status = 'RECEIVE';
    },
    failureList: (state, action) => {
      state.error = action.payload;
      state.status = 'FAILURE';
    },
  },
});

export const { requestList, receiveList } = ratioSlice.actions;

export const requestAsync = () => (dispatch: any) => {
  dispatch(requestList());
  setTimeout(() => {
    dispatch(receiveList(data));
  }, 3000);
};

export default ratioSlice.reducer;
