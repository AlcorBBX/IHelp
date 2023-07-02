import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';

export function makeStore() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
}

export const appStore = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch;
