import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between py-5 px-16 bg-gray-200">
      <Link to="/" className="font-bold text-xl">
        Biller
      </Link>
      <Link to="/login" className="font-bold text-lg">
        Login
      </Link>
    </div>
  );
};

export default Header;
