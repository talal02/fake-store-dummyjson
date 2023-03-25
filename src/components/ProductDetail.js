import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import Container from "react-bootstrap/Container";

function ProductDetail({products, cart, setCart}) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        for(let i = 0; i < products.length; i++) {
            if(products[i].id === Number(id)) {
                setProduct(products[i]);
                break;
            }
        }
    }, [id, products])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    const handleClick = (e) => {
        e.preventDefault();
        product.quantity = quantity;
        setCart([...cart, product]);
    }

    return (
        <Container className="product-page">
            {
                product && (
                    <Row>
                        <Col md={6} className="product-image-col">
                            <Image src={product.images[0]} fluid className="product-image" />
                        </Col>
                        <Col md={6} className="product-details-col">
                            <h2 className="product-title">{product.title}</h2>
                            <div className="product-price-availability">
                                <span className="product-price">${product.price}</span>
                                <span className="product-availability">In Stock -> {product.stock}</span>
                            </div>
                            <Form className="product-form">
                                <Form.Group controlId="quantity">
                                    <Form.Label className="product-form-label">Quantity</Form.Label>
                                    <input type="number" defaultValue={1} min={1} onChange={(e) => setQuantity(e.target.value)} className="product-form-input" />
                                </Form.Group>
                                <Button variant="primary" className="product-add-to-cart-btn" onClick={handleClick}>Add to Cart</Button>
                            </Form>
                            <hr />
                            <div className="product-category-section">
                                <span className="product-category-label">Category: </span>
                                <span className="product-category">{product.category}</span>
                            </div>
                            <div className="product-description-section">
                                <h4 className="product-description-label">Description:</h4>
                                <p className="product-description">{product.description}</p>
                            </div>
                        </Col>
                    </Row>
                )
            }
        </Container>
    );
}

export default ProductDetail;