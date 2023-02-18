import React from "react";
import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";
import CartPage from "./pages/CartPage/CartPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage"
import ContactUs from "./pages/ContactUs/ContactUs";
import './scss/App.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<CollectionPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/cart" element={<CartPage/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
