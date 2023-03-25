import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";



const Home = ({products}) => {

    return (
        <Container>
            <Row className="mt-3">
                {products.map((product, id) => (
                    <Col key={`p-${id}`} md={4} className="mt-3">
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;