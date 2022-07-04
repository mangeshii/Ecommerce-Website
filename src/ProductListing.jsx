import { useEffect,useState } from "react";
import ProductComponent from "./ProductComponent"
import ProductDetails from "./ProductDetails";

function ProductListing(){

    const [getData,setData]=useState([])   
    async function fetchdetails(){
        try{
            const response= await fetch('https://fakestoreapi.com/products/')
            const data=await response.json()
            setData(data)
        }
        catch(e){
            console.log('error has occured')
        }

    }

useEffect(()=>{
    fetchdetails()
},[])

return(
    <div  className="container">
        <ProductComponent getData={getData}/>
        
    </div>
)
}

export default ProductListing


