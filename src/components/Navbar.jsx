import React from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router';

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
     localStorage.removeItem("users");
     navigate("/");
  }

  return (
    <div className="flex flex-col justify-between ">
      <div className='flex items-center justify-evenly absolute top-2 fixed'>
        <img 
        className="rounded-full h-20"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV47BewRvLkbyCIjvXppFyBk4spxoq5sRF9m6svqEcdg&s=10"/>
        <h1 className='text-3xl text-red-600 '>Techlance</h1>
      </div>
      <div className='text-2xl flex flex-col gap-5 pl-10 absolute top-80 fixed'>
        <NavLink
          className={({isActive}) => isActive ? "font-semibold text-red-500": "text-black border-b border-gray-500"}
          to={"/main"}
          end
        > Home </NavLink>
        <NavLink
          className={({isActive}) => isActive ? "font-semibold text-red-500": "text-black border-b border-gray-500"}
          to={"/main/products"}
        >Products</NavLink>
        <NavLink
          className={({isActive}) => isActive ? "font-semibold text-red-500": "text-black border-b border-gray-500"}
          to={"/main/users"}
        >Users</NavLink>
      </div>
      <div className=" pl-6 absolute top-175 fixed"> 
         <button 
         onClick={handleLogout}
         className="bg-gray-400 px-10 py-3 text-2xl rounded-2xl hover:bg-gray-500 hover:cursor-pointer">Logout</button>
      </div>
       
    </div>
  )
}

export default Navbar;
