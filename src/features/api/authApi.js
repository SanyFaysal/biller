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
        url: `/registration`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['user'],
    }),
    getMe: builder.query({
      query: (token) => ({
        url: `/me`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['user'],
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useGetMeQuery } = authApi;
