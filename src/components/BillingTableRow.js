import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useRemoveBillingMutation } from '../features/api/billingApi';
const BillingTableRow = ({ billing, setBilling }) => {
  const dispatch = useDispatch();
  const { _id, firstName, lastName, email, phoneNumber, billingAmount } =
    billing;

  const [removeBilling, { isLoading, isSuccess, isError, error }] =
    useRemoveBillingMutation();
  const handleDelete = (id) => {
    dispatch(removeBilling(id));
  };
  useEffect(() => {
    if (isLoading) {
      toast.loading('Loading...', { id: 'delete' });
    }
    if (isSuccess) {
      toast.success('Success', { id: 'delete' });
    }
    if (isError) {
      toast.error(error, { id: 'delete' });
    }
  }, [error, isLoading, isSuccess, isError]);
  return (
    <tr>
      <th>{_id}</th>
      <td>{firstName + ' ' + lastName}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{billingAmount}</td>
      <td>
        <div className="flex justify-around">
          <label
            htmlFor="edit-modal"
            onClick={() => setBilling(billing)}
            className="text-xl"
          >
            <GrEdit />
          </label>

          <p className="text-xl" onClick={() => handleDelete(_id)}>
            <RiDeleteBin4Line />
          </p>
        </div>
      </td>
    </tr>
  );
};

export default BillingTableRow;
