import { configureStore } from '@reduxjs/toolkit';
import { billingApi } from '../features/api/billingApi';

const store = configureStore({
  reducer: {
    [billingApi.reducerPath]: billingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(billingApi.middleware),
});

export default store;
