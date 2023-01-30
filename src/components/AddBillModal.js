import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useAddBillingMutation } from '../features/api/billingApi';
import SubmissionForm from './SubmissionForm';

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

          <SubmissionForm
            handleSubmit={handleSubmit}
            submit={submit}
            register={register}
            id="add-billing-modal"
          />
        </div>
      </div>
    </div>
  );
};

export default AddBillModal;
