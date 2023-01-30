import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetBillingsQuery } from '../features/api/billingApi';

const Header = () => {
  const { data } = useGetBillingsQuery({ pagination: 1, filter: '' });
  const totalBill = data?.data?.totalBill;
  console.log(totalBill);
  return (
    <div className="flex justify-between py-5 px-16 bg-gray-200">
      <Link to="/" className="font-bold text-xl">
        Biller
      </Link>

      <p className="font-bold text-xl">Total Bill : {totalBill}</p>
      <Link to="/login" className="font-bold text-lg">
        Login
      </Link>
    </div>
  );
};

export default Header;
