import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import data from './data';

interface ListItem {
  value: number;
  name: string;
  meta: string;
}

interface RequestError {
  type: 200 | 400;
  message: string;
}

interface RatioState {
  list: ListItem[];
  error: RequestError | null;
  status: 'INITIAL' | 'REQUEST' | 'RECEIVE' | 'FAILURE';
}

const initialState: RatioState = {
  list: [],
  error: null,
  status: 'INITIAL',
};

export const ratioSlice = createSlice({
  name: 'ratio',
  initialState,
  reducers: {
    requestList: (state) => {
      state.list = [];
      state.status = 'REQUEST';
    },
    receiveList: (state, action: PayloadAction<ListItem[]>) => {
      state.list = action.payload;
      state.status = 'RECEIVE';
    },
    failureList: (state, action: PayloadAction<RequestError>) => {
      state.error = action.payload;
      state.status = 'FAILURE';
    },
  },
});

export const { requestList, receiveList } = ratioSlice.actions;

export const requestAsync = (): AppThunk => dispatch => {
  console.log('requestAsync');
  dispatch(requestList());
  setTimeout(() => {
    dispatch(receiveList(data));
  }, 3000);
};

export const selectRatio = (state: RootState) => state.ratio;
export const selectList = (state: RootState) => state.ratio.list;
export const selectError = (state: RootState) => state.ratio.error;
export const selectStatus = (state: RootState) => state.ratio.status;

export default ratioSlice.reducer;
