import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./DetailedPageStyling.css"

function ProductDetails() {
    const productid = useParams();
    const [getProductDetails, setProductDetails] = useState('')
    const { image, title, price, category, description } = getProductDetails

    async function fetchProductDetails(id) {
        const { productid } = id
        try {
            const DetailProductResponse = await fetch(`https://fakestoreapi.com/products/${productid}`)
            const DetailProductData = await DetailProductResponse.json()
            setProductDetails(DetailProductData)
        }
        catch (e) {
            console.log('Error occured')
        }

    }

    useEffect(() => { 
        fetchProductDetails(productid)
    }, [productid])

    return (
        <>
            {getProductDetails !== undefined ? (
                <div className="container">
                    <div class="cardd mb-3" >
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={image} class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">{title}</h3>
                                    <p class="tag">{`$ ${price}`}</p>
                                    <p class="card-text"><small class="text-muted">{category}</small></p>
                                    <p>{description}</p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (<p>Error</p>)}
        </>

    )
}

export default ProductDetails
