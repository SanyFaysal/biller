import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useEditBillingMutation } from '../features/api/billingApi';
import SubmissionForm from './SubmissionForm';

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
          <SubmissionForm
            handleSubmit={handleSubmit}
            submit={submit}
            register={register}
            billing={billing}
            id="edit-modal"
          />
        </div>
      </div>
    </div>
  );
};

export default EditBillModal;
