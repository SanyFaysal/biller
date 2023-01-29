import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import AddBillModal from '../components/AddBillModal';
import BillingTableRow from '../components/BillingTableRow';
import EditBillModal from '../components/EditBillModal';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import { useGetBillingsQuery } from '../features/api/billingApi';

const Billings = () => {
  const { data, isSuccess, isLoading, isError, error } = useGetBillingsQuery();
  const [billing, setBilling] = useState();
  const billingList = data?.data;

  return (
    <div className="overflow-x-auto mt-4 px-6">
      <div className="bg-gray-100 py-3 rounded-lg flex justify-between my-4 px-12">
        <div className="flex items-center font-semibold w-3/4">
          <h2 className="">Billing List</h2>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm ml-28 w-1/4"
          />
        </div>
        <div className="w-1/4 flex justify-end">
          {/* <button className="btn btn-sm btn-none ">Add New Bill</button> */}
          <label htmlFor="add-billing-modal" className="btn btn-sm btn-none ">
            Add New Bill
          </label>
        </div>
      </div>
      <table className="table table-compact border  rounded  w-full">
        <thead>
          <tr>
            <th>Billing Id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Billing Amount</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {isSuccess &&
            billingList.map((billing) => (
              <BillingTableRow
                billing={billing}
                key={billing._id}
                setBilling={setBilling}
              />
            ))}
          {isLoading && (
            <tr>
              <th>
                {' '}
                <button className="btn btn-md loading bg-transparent text-black border-none px-[0px]"></button>
                Generating Id ...
              </th>
              <th>---</th>
              <th>---</th>
              <th>---</th>
              <th>---</th>
              <th className="text-center">--</th>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination />
      <AddBillModal />
      <EditBillModal billing={billing} />
    </div>
  );
};

export default Billings;
