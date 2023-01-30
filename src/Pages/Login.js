import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../features/api/authApi';

const Login = () => {
  const { handleSubmit, register, reset } = useForm();
  const [loginUser, { isLoading, isError, isSuccess, error, data }] =
    useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };
  useEffect(() => {
    if (isLoading) {
      toast.loading('Loading...', { id: 'edit' });
    }
    if (isSuccess) {
      toast.success('Success', { id: 'edit' });
      localStorage.setItem('token', data?.token);
      navigate('/');

      reset();
    }
    if (isError) {
      toast.error(error, { id: 'edit' });
    }
  }, [error, isLoading, isSuccess, isError, reset, data?.token, navigate]);
  return (
    <div className="flex  items-center pt-10">
      <div className="w-1/2  rounded-lg grid place-items-center p-10 px-16 border mx-auto">
        <h1 className="mb-10 font-bold text-2xl">Login your account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="">
            <label htmlFor="email" className="font-semibold text-sm mb-1 ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...register('email')}
              className="w-full input input-sm py-5 input-bordered"
            />
          </div>
          <div className="flex flex-col items-start my-2">
            <label htmlFor="password" className="font-semibold text-sm mb-1  ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              {...register('password')}
              className="w-full input input-sm py-5 input-bordered"
            />
          </div>

          <div className="!mt-8 ">
            <button
              type="submit"
              className="font-bold text-white py-3 rounded-full bg-green-500 w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Login
            </button>
          </div>
          <div>
            <p>
              Already have an account?{' '}
              <span
                className="text-primary hover:underline cursor-pointer"
                onClick={() => navigate('/register')}
              >
                Register
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
