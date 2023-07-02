import { createSlice } from '@reduxjs/toolkit';

type UserSliceState =
  | {
      accessToken: string;
      userId: number;
      isAuthorized: true;
    }
  | {
      isAuthorized: false;
      accessToken?: string;
      userId?: number;
    };

const initialState: UserSliceState = {
  isAuthorized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearSessionData: (state) => {
      state.accessToken = undefined;
      state.userId = undefined;
      state.isAuthorized = false;
    },
  },
});

export const { clearSessionData } = userSlice.actions;
