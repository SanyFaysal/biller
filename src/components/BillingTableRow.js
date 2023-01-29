import React from 'react';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin4Line } from 'react-icons/ri';
const BillingTableRow = ({ billing, setBilling }) => {
  const { _id, fullName, email, phoneNumber, billingAmount } = billing;
  return (
    <tr>
      <th>{_id}</th>
      <td>{fullName}</td>
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

          <p className="text-xl">
            <RiDeleteBin4Line />
          </p>
        </div>
      </td>
    </tr>
  );
};

export default BillingTableRow;
