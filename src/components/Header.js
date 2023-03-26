import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.jpg';
import cart1 from '../cart.png';
import {Badge, Form} from "react-bootstrap";

function Header({cart, search, setSearch}) {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="Logo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Fake Store
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <input
                            type="search"
                            placeholder="Search"
                            className="product-form-input"
                            style={{lineHeight: '1'}}
                            onChange={(e) => setSearch(e.target.value)}
                            aria-label="Search"
                        />
                    </Form>
                    <a href="/cart">
                        <img
                            alt="Cart"
                            src={cart1}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        <Badge variant="secondary">{cart.length}</Badge>
                    </a>
                </Container>
            </Navbar>
        </div>
    );

}

export default Header;