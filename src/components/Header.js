import React from 'react';
import { Link } from 'react-router-dom';
import { useGetMeQuery } from '../features/api/authApi';
import { useGetBillingsQuery } from '../features/api/billingApi';

const Header = () => {
  const { data: billing } = useGetBillingsQuery({ pagination: 1, filter: '' });
  const totalBill = billing?.data?.totalBill;
  const { data } = useGetMeQuery(localStorage.getItem('token'));
  const email = data?.data?.email;

  return (
    <div className="flex justify-between py-5 px-16 bg-gray-200">
      <Link to="/" className="font-bold text-xl">
        Biller
      </Link>

      {!email ? (
        <Link to="/login" className="font-bold text-lg">
          Login
        </Link>
      ) : (
        <p className="font-bold text-xl">Total Bill : {totalBill}</p>
      )}
    </div>
  );
};

export default Header;
