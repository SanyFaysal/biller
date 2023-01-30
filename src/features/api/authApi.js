import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
  }),
  tagTypes: ['user'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['user'],
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: `/register`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['billings'],
    }),
  }),
});

export const {
  useGetBillingsQuery,
  useAddBillingMutation,
  useEditBillingMutation,
  useRemoveBillingMutation,
} = authApi;
