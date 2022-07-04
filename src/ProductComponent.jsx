import "./style.css"

const ProductComponent = (props) => {
    const { getData } = props

    const renderList = getData.map((product, index) => {
        const { title, price, image, category } = product

        return (
            <div key={index} className="col">
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