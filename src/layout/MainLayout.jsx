import { Outlet } from 'react-router'
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className="h-screen p-2 flex grid grid-cols-2 grid-cols-[1fr_6fr]">
      <Navbar/>
        <div className="h-full border-l-2 border-gray-500 p-2">
        <Outlet/>
      </div>      
    </div>
  )
}

export default MainLayout;
