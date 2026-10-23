import React,{useContext} from 'react';
import { Auth } from '../context/AuthContext';
import { Outlet, useNavigate } from 'react-router';


const ProtectedRoutes = () => {
  const {loggedInUser} = useContext(Auth);
  const navigate = useNavigate();
  
   if(!loggedInUser){
      navigate("/");
   }

  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default ProtectedRoutes;
