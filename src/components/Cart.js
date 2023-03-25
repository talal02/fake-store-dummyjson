import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";

const Cart = ({ cart, setCart }) => {

    const removeFromCart = (productToRemove) => {
        const newCart = cart.filter((product) => product.id !== productToRemove.id);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center mb-4">Your Cart</h1>
                </div>
            </div>
            {cart.length > 0 ? (
                <div className="row">
                    <div className="col-12 col-lg-8">
                        {cart.map((product) => (
                            <div className="card mb-3" key={product.id}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={product.images[0]} className="img-fluid rounded-start" alt={product.title} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">$ {product.price}</p>
                                            <p className="card-text">Quantity: {product.quantity}</p>
                                            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(product)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">Cart Summary</h5>
                                <p className="card-text">Total Items: {cart.length}</p>
                                <p className="card-text">Total Price: $ {getTotalPrice()}</p>
                                <p className="card-text">Shipping Tax: $ 6.67</p>
                                <Link to="/" className="btn btn-primary btn-sm m-2">
                                    Continue Shopping
                                </Link>
                                <Button className="btn btn-success btn-sm m-2" onClick={clearCart}>
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row">
                    <div className="col-12">
                        <div className="alert alert-info" role="alert">
                            Your cart is empty.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
