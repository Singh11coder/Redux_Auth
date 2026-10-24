import React,{useState, useEffect} from 'react'
import axiosInstance from '../api/axiosInstance';
import Card from '../components/Card';

const Products = () => {
  
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");

  const fetchProducts = async() => {
      try{
        setLoading(true);
        setError("");

        const response = await axiosInstance.get("/products");
        console.log(response.data);
        setProducts(response.data.products);
      }catch(error){
         console.log('Error',error.message);
         setError("Failed to Fetch Products. Please try again");  
      }finally{
        setLoading(false);
      }
  }

  useEffect(()=>{
    fetchProducts();
  },[])
  
  if(loading) return <p className='p-6 text-center'>Loading Products....</p>

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold text-slate-800">
        Products
      </h1>
       <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
         {products.map((val) => {
            return <Card val={val}/>
         })} 
       </div>  
    </div>
  )
}

export default Products
