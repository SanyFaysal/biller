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
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: `/registration`,
        method: 'POST',
        body: data,
      }),
    }),
    getMe: builder.mutation({
      query: (token) => ({
        url: `/registration`,
        method: 'POST',
        headers: {
          'content-type': 'text/plain',
          authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useGetMeMutation } =
  authApi;
