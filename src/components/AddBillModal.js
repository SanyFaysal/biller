import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { useDispatch, useSelector } from 'react-redux';
import { useAddBillingMutation } from '../features/api/billingApi';

const AddBillModal = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const [postBilling, { isLoading, isError, isSuccess, error }] =
    useAddBillingMutation();

  const submit = (data) => {
    const billingData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      billingAmount: data.billingAmount,
    };

    dispatch(postBilling(billingData));
  };

  useEffect(() => {
    if (isLoading) {
      toast.loading('Loading...', { id: 'edit' });
    }
    if (isSuccess) {
      toast.success('Success', { id: 'edit' });
      reset();
      document.getElementById('add-billing-modal').checked = false;
    }
    if (isError) {
      toast.error(error, { id: 'edit' });
    }
  }, [error, isLoading, isSuccess, isError, reset]);

  return (
    <div>
      <input type="checkbox" id="add-billing-modal" className="modal-toggle" />
      <div className="modal" id="add-billing-modal">
        <div className="modal-box  w-1/2 max-w-5xl px-12 pb-12 pt-8  ">
          <h3 className="font-bold text-xl  mb-5">Add New Bill</h3>
          <form onSubmit={handleSubmit(submit)}>
            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-3 pb-5">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-semibold ">
                  First Name
                </label>
                <input
                  type="text"
                  required={true}
                  {...register('firstName')}
                  placeholder="Enter your first name"
                  className="input input-bordered input-sm py-5"
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="firstName" className="text-sm font-semibold ">
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  {...register('lastName')}
                  placeholder="Enter your last name"
                  className="input input-bordered input-sm py-5"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-semibold ">
                  Email
                </label>
                <input
                  required
                  type="email"
                  {...register('email')}
                  placeholder="Enter your email"
                  className="input input-bordered input-sm py-5"
                />
              </div>

              <div className="flex flex-col ">
                <label htmlFor="firstName" className="text-sm font-semibold ">
                  Phone Number
                </label>
                <input
                  type="text"
                  required
                  {...register('phoneNumber')}
                  placeholder="Enter your phone number"
                  className="input input-bordered input-sm py-5"
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="firstName" className="text-sm font-semibold ">
                  Billing Amount
                </label>
                <input
                  type="number"
                  {...register('billingAmount')}
                  placeholder="Enter Payment Amount"
                  className="input input-bordered input-sm py-5"
                />
              </div>
              <div className="modal-action flex justify-end items-center">
                <input
                  type="submit"
                  className="py-3 h-full btn btn-sm my-auto bg-green-500 hover:border-none border-none hover:bg-green-500 px-4 mr-3"
                  value="Add Bill"
                />

                <label
                  htmlFor="add-billing-modal"
                  className="btn h-full btn-sm bg-red-500 py-3 my-auto hover:border-none border-none hover:bg-red-500 px-4  "
                >
                  Close
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBillModal;
