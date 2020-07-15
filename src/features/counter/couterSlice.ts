import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: any) => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000);
}

export const fetchUserById = userId => {
  return async (dispatch, getState) => {
    try {
      const user = await userAPI.fetchById(userId);
      dispatch(userLoaded(user));
    } catch (err) {

    }
  }
}

interface RootState {
  counter: {
    value: number;
  }
}

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
