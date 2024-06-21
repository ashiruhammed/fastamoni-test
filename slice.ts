import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  password: '',
};
const userSlice = createSlice({
  name: 'userWallet',
  initialState,
  reducers: {
    saveUser: (state: any, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});
export const { saveUser } = userSlice.actions;
export const reducer = userSlice.reducer;
