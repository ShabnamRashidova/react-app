import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Basket from "./components/Basket";
import NotFound from "./components/NotFound";
import "./css/style.css";
import products from "./components/product.json";
import {BrowserRouter as Router ,Route, Routes } from "react-router-dom";
const App = () => {
  const [money] = useState(3000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
  
    setTotal(
      basket.reduce((acc, item) => {
        return acc + item.amount * products.find((p) => p.id === item.id).price;
      }, 0)
    );
  }, [basket]);
  return (
    <Router>
      <Header total={total} money={money} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="row">
              {products.map((product) => (
                <div className="col-lg-4 mt-3"  key={product.id}>
                  <Products
                   
                    total={total}
                    money={money}
                    basket={basket}
                    setBasket={setBasket}
                    product={product}
                  />
                </div>
              ))}
            </div>
          }
        />
        <Route
          path="/sebet"
          element={
            <Basket
              products={products}
              basket={basket}
              setBasket={setBasket}
              total={total}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
