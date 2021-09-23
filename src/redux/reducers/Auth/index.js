import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.loading = true;
      state.token = true;
      state.loading = false;
    },
    logout: state => {
      state.token = false;
    },
  },
});

const {
  actions: {login, logout},
} = authSlice;

export {login, logout};
export default authSlice.reducer;
