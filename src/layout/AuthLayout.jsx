import React from 'react'
import { Outlet } from 'react-router';
 import { ToastContainer, toast } from 'react-toastify';

const AuthLayout = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
       <Outlet/>
    </div>
  )
}

export default AuthLayout;
