import "./style.css"
import { Link } from "react-router-dom";
import React from 'react';


const ProductComponent = (props) => {
    const { getProductData } = props

    const renderList = getProductData.map((product, index) => {
        const { id, title, price, image, category } = product

        return (
            <div key={index} className="col">
                <Link style={{textDecoration:'none',color:"black"}} className="link" to={`/product/${id}`}>
                    {product !== undefined ? (
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={image} className="image card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="header">{title}</h6>
                                <h5 className="price"><b>{`$ ${price}`}</b></h5>
                                <p className="category">{category}</p>
                            </div>
                        </div>
                    ) : (<p>Error</p>)}
                </Link>
            </div>

        )
    })
    return (
        <>
            {renderList}
        </>
    )







}

export default ProductComponent