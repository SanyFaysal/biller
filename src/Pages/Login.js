import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const { handleSubmit, register, reset, control } = useForm();

  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // dispatch(createUser(data));
    console.log(data);
  };

  return (
    <div className="flex  items-center pt-10">
      <div className="w-1/2  rounded-lg grid place-items-center p-10 px-16 border mx-auto">
        <h1 className="mb-10 font-bold text-2xl">Login your account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="">
            <label htmlFor="email" className="font-semibold text-lg mb-1 ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...register('email')}
              className="w-full input input-bordered"
            />
          </div>
          <div className="flex flex-col items-start my-2">
            <label htmlFor="password" className="font-semibold text-lg mb-1  ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              {...register('password')}
              className="w-full input input-bordered"
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
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
