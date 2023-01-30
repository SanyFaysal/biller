import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { Navigate, useLocation } from 'react-router-dom';
import { useGetMeQuery } from '../features/api/authApi';
// import Loading from "../components/reusable/Loading";

const PrivateRoute = ({ children }) => {
  const { data, isLoading, isSuccess, isError, error } = useGetMeQuery(
    localStorage.getItem('token')
  );

  const { pathname } = useLocation();
  useEffect(() => {
    if (isLoading) {
      toast.loading('Loading...', { id: 'edit' });
    }

    if (isError) {
      toast.error(error, { id: 'edit' });
    }
  }, [error, isLoading, isSuccess, isError]);
  const email = data?.data?.email;
  console.log(email);
  if (isLoading) {
    // return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
