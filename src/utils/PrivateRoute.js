import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useGetMeMutation } from '../features/api/authApi';
// import Loading from "../components/reusable/Loading";

const PrivateRoute = ({ children }) => {
  const [getMe, result] = useGetMeMutation();

  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  useEffect(() => {
    dispatch(getMe(token));
  }, []);

  console.log(result);

  const { pathname } = useLocation();
  const isLoading = false;
  const email = 'test@gmail.com';

  if (isLoading) {
    // return <Loading />;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
