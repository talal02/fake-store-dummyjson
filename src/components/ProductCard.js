import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

function ProductCard({product}) {
    return (
        <Card>
            <Card.Img className="card-img-top" variant="top" src={product.images[0]} />
            <Card.Body className="text-center">
                <Card.Title>{product.title}</Card.Title>
                <hr/>
                <Card.Text>Price ${product.price}</Card.Text>
                <Card.Text>In Stock {product.stock}</Card.Text>
                <Button variant="primary">
                    <Link to={`/product/${product.id}`} className="text-white">More Details</Link>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;