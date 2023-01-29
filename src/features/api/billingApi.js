import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const billingApi = createApi({
  reducerPath: 'billingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
  }),
  tagTypes: ['billings'],
  endpoints: (builder) => ({
    getBillings: builder.query({
      query: () => '/billing-list',
      providesTags: ['billings'],
    }),
    addBilling: builder.mutation({
      query: (data) => ({
        url: '/add-billing',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['billings'],
    }),
    editBilling: builder.mutation({
      query: ({ id, billingData }) => ({
        url: `/update-billing/${id}`,
        method: 'PATCH',
        body: billingData,
      }),
      invalidatesTags: ['billings'],
    }),
    removeBilling: builder.mutation({
      query: (id) => ({
        url: `/delete-billing/${id}`,
        method: 'DELETE',
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
} = billingApi;
