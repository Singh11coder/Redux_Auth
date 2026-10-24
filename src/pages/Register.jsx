
import React,{useContext} from "react";
import { useNavigate } from "react-router";
import {useForm} from 'react-hook-form';
import { Auth } from "../context/AuthContext.jsx";
import {toast } from 'react-toastify';

const Register = () => {

  const navigate = useNavigate();
  const {registeredUser, setRegisteredUser} = useContext(Auth);

  const {
    register, 
    reset, 
    handleSubmit,
    formState:{errors}
  } = useForm({
    mode:"onChange"
  });

 
const handleForm = (data) => {
  const emailExists = registeredUser.some(
    (user) =>
      user.Email.toLowerCase() === data.Email.toLowerCase()
  );

  if (emailExists) {
    toast.error("This email is already registered");
    return;
  }

  const updatedUsers = [...registeredUser, data];

  setRegisteredUser(updatedUsers);
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  toast.success("User created successfully");
  reset();
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl sm:p-10">
        
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-bold text-white">
            A
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Create an account
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Join us and get started today
          </p>
        </div>

        <form onSubmit={handleSubmit(handleForm)}className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full name
            </label>
            <input
              {...register("Name",{
                 required:"Name is required"
              })}
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            {errors.Name && <p className="text-red-600">{errors.Name.message}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email address
            </label>
            <input
            {...register("Email",{
               required:"Email is required"
            })}
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            {errors.Email && <p className="text-red-600">{errors.Email.message}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
            {...register("Password",{
               required:"Password is required",
               minLength:{
                  value:6,
                  message:"Minimum 6 Character are required"
               },
               maxLength:{
                  value:10,
                  message:"Maximum 10 character "
               }
            })}
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            {errors.Password && <p className="text-red-600">{errors.Password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
  