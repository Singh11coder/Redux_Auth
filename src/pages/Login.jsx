
import React,{useContext} from "react";
import {useNavigate} from 'react-router';
import {useForm} from 'react-hook-form';
import { Auth } from "../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const  navigate  = useNavigate();
  
  const {registeredUser,loggedInUser, setLoggedInUser} = useContext(Auth);

  const{
    register,
    reset,
    handleSubmit,
    formState:{errors}
  } = useForm();
  
  const formHandle = (data) => {
    let ans = registeredUser.find((val) => val.Email === data.Email 
    && val.Password === data.Password);
    
    if(ans){
      console.log("Logged in ");
      toast.success("Logged In Succesfully");
      setLoggedInUser(data);
    }
    else{
      console.log("Wrong Credentials");
      toast.error("Wrong Email or Password")
    }

    reset();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl sm:p-10">

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-bold text-white">
            A
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Login to continue to your account
          </p>
        </div>
        
        <form onSubmit={handleSubmit(formHandle)} className="space-y-5">
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
            <div className="mb-2 flex items-center justify-between">
              <label className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <p
                to="/forgot-password"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
              >
                Forgot password?
              </p>
            </div>
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
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
            {errors.Password && <p className="text-red-600">{errors.Password.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="font-semibold text-indigo-600 hover:text-indigo-800"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
