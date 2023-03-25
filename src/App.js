import './App.css';
import {useEffect, useState} from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {

    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchProducts, setSearchProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data.products));
    }, []);

    useEffect(() => {
        if(search === "") {
            setSearchProducts(products);
        } else {
            setSearchProducts(products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())));
        }
    }, [search, products]);

  return (
      <div>
        <Header cart={cart} search={search} setSearch={setSearch} />
        <main>
            <Router>
                <Routes>
                    <Route path="/" element={<Home products={searchProducts} />} />
                    <Route path="/product/:id" element={<ProductDetail products={products} cart={cart} setCart={setCart} />} />
                    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                    <Route path="*" element={<h1 className="text-center m-5 text-warning">404 PAGE</h1>} />
                </Routes>
            </Router>
        </main>
      </div>
  );
}

export default App;
