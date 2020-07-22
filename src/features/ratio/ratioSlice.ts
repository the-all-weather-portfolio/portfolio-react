import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import data from './data';

interface ListItemRow {
  stock: string;
  quantity: number;
  price: number;
}

interface ListItem extends ListItemRow {
  value: number;
  ratio: number;
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

function parseData(data: ListItemRow[]): ListItem[] {
  const sum = data.reduce((acc: number, item) => acc + (item.quantity * item.price), 0);
  return data.map(item => ({
    ...item,
    value: item.quantity * item.price,
    ratio: (item.quantity * item.price) / sum * 100,
  }));
}

export const ratioSlice = createSlice({
  name: 'ratio',
  initialState,
  reducers: {
    requestList: (state) => {
      state.list = [];
      state.status = 'REQUEST';
    },
    receiveList: (state, action: PayloadAction<any[]>) => {
      state.list = parseData(action.payload);
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
