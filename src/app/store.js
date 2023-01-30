import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../features/api/authApi';
import { billingApi } from '../features/api/billingApi';

const store = configureStore({
  reducer: {
    [billingApi.reducerPath]: billingApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(billingApi.middleware, authApi.middleware),
});

export default store;
