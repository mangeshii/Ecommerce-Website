import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./style1.css"

function ProductDetails() {
    const productid = useParams();
    const [getDetails, setDetails] = useState('')
    const { image, title, price, category, description } = getDetails
    // console.log(getDetails)

    async function fetchProductDetails (id) {
        const { productid } = id
        try {
            const DetailProductResponse = await fetch(`https://fakestoreapi.com/products/${productid}`)
            const DetailProductData = await DetailProductResponse.json()
            setDetails(DetailProductData)
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
            {getDetails !== undefined ? (
                <div className="container">
                    <div class="cardd mb-3" >
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={image} class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{title}</h5>
                                    <p class="card-text">{price}</p>
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
