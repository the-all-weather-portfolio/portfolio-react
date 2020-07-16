import { createSlice } from '@reduxjs/toolkit';
import data from './data';

export const ratioSlice = createSlice({
  name: 'ratio',
  initialState: {
    list: [],
    error: {},
    status: 'INITIAL',
  },
  reducers: {
    requestList: (state) => {
      state.list = [];
      state.error = {};
      state.status = 'REQUEST';
    },
    receiveList: (state, action) => {
      console.log(action);
      state.list = action.payload;
      state.status = 'RECEIVE';
    },
    failureList: (state, action) => {
      state.error = action.payload;
      state.status = 'RECEIVE';
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
