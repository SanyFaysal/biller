import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {
  useAddBillingMutation,
  useEditBillingMutation,
} from '../features/api/billingApi';

const EditBillModal = ({ billing }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const [editBilling, { isLoading, isError, isSuccess, error }] =
    useEditBillingMutation();
  const submit = (data) => {
    const { firstName, lastName, email, phoneNumber, billingAmount } = data;
    const billingData = {
      firstName: firstName ? firstName : billing.firstName,
      lastName: lastName ? lastName : billing.lastName,
      email: email ? email : billing.email,
      phoneNumber: phoneNumber ? phoneNumber : billing.phoneNumber,
      billingAmount: billingAmount ? billingAmount : billing.billingAmount,
    };

    dispatch(editBilling({ id: billing._id, billingData }));
  };
  useEffect(() => {
    if (isLoading) {
      toast.loading('Loading...', { id: 'edit' });
    }
    if (isSuccess) {
      toast.success('Success', { id: 'edit' });
      reset();
      document.getElementById('edit-modal').checked = false;
    }
    if (isError) {
      toast.error(error, { id: 'edit' });
    }
  }, [error, isLoading, isSuccess, isError, reset]);

  return (
    <div>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal" id="edit-modal">
        <div className="modal-box  w-1/2 max-w-5xl px-12 pb-12 pt-8  ">
          {isLoading ? (
            <p className="h-5  text-center">Loading...</p>
          ) : (
            <p className="h-5"></p>
          )}
          <h3 className="font-bold text-xl  mb-5">
            Edit Billing of{' '}
            <span className="uppercase text-gray-300 font-bold "></span>
          </h3>
          <form onSubmit={handleSubmit(submit)}>
            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-3 pb-5">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-semibold ">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue={billing?.firstName}
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
                  type="text"
                  {...register('lastName')}
                  defaultValue={billing?.lastName}
                  placeholder="Enter your last name"
                  className="input input-bordered input-sm py-5"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-semibold ">
                  Email
                </label>
                <input
                  type="text"
                  {...register('email')}
                  defaultValue={billing?.email}
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
                  {...register('phoneNumber')}
                  defaultValue={billing?.phoneNumber}
                  placeholder="Enter your phone number"
                  className="input input-bordered input-sm py-5"
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="firstName" className="text-sm font-semibold ">
                  Billing Amount
                </label>
                <input
                  type="text"
                  {...register('billingAmount')}
                  defaultValue={billing?.billingAmount}
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
                  htmlFor="edit-modal"
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

export default EditBillModal;
