import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Home from './pages/Home';


const router = createBrowserRouter([
   {
     path:"/",
     element:<AuthLayout/>,
     children:[
       {
         path:"",
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
          element:<Home/>
       }
     ]
   }
   
])

createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <RouterProvider router={router} />
  </AuthProvider>
    
)
