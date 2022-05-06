import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/pages/HomePage/Home.js";
import Footer from "./components/pages/Footer/Footer.js";
import CardStore from "./components/CardStore";
import Pricing from "./components/Pricing";
import CardCategory from "./components/CardCategory";
import CardBlog from "./components/CardBlog";
import Form from "./components/pages/SignUp/Form";
import FormL from "./components/pages/LogIn/FormL";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/boutiques"
          element={
            <>
              <CardCategory />
              <CardStore />
            </>
          }
        />
        <Route path="/abonnements" element={<Pricing />} />
        <Route path="/blog" element={<CardBlog />} />
        <Route path="/sign-up" element={<Form />} />
        <Route path="/avis" element={<FormL />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
