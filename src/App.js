import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routers,
  Route,
  Routes,
} from "react-router-dom";
import { Navbar, SideBar, Footer } from "./components";
import {
  Home,
  Cart,
  Error,
  AuthWrapper,
  About,
  Checkout,
  PrivateRoute,
  SingleProduct,
  Products,
} from "./pages";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
