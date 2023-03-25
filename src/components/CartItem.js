
function CartItem({product}) {
    return (
        <div className="card m-2 text-center">
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Quantity = {product.quantity}</h6>
                <h6 className="card-text">Price = {product.price}$</h6>
                <h5 className="card-text">Total = {product.total}$</h5>
            </div>
        </div>
    );
}

export default CartItem;