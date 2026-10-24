import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Home from './pages/Home';
import Users from './pages/Users';
import Products from './pages/Products';
import MainLayout from './layout/MainLayout';


const router = createBrowserRouter([
   {
     path:"/",
     element:<AuthLayout/>,
     children:[
       {
         index:true,
         element:<Login/>
       },
       {
         path:"register",
         element:<Register/>
       }
     ]
   },
   {
     path:"/main",
     element:<ProtectedRoutes/>,
     children:[
       {
          path:"",
          element:<MainLayout/>,
          children:[
             {
               index:true,
               element:<Home/>
             },
             { 
               path:"users",
               element:<Users/>
             },
             {
               path:"products",
               element:<Products/>
             }
          ]
       }
     ]
   }
   
])

createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <RouterProvider router={router} />
  </AuthProvider>
    
)
