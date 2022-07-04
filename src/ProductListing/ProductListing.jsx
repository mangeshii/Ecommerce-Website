import { useEffect,useState } from "react";
import ProductComponent from "./ProductComponent"
import ProductDetails from "../ProductDetails/ProductDetails";

function ProductListing(){

    const [getProductData,setProductData]=useState([])   
    async function fetchdetails(){
        try{
            const response= await fetch('https://fakestoreapi.com/products/')
            const data=await response.json()
            setProductData(data)
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
        <ProductComponent getProductData={getProductData}/>
        
    </div>
)
}

export default ProductListing


