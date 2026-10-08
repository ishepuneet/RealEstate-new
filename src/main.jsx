import React from "react";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Properties from "./components/Properties";
import About from "./components/About";
import Buy from "./components/Buy";
import Sell from "./components/Sell";
import Resources from "./components/Resources";
import Contact from "./components/Conatct";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createRoot } from "react-dom/client";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    {/* <App /> */}
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.StrictMode>
    <Footer />
    {/* <Analytics /> */}
  </BrowserRouter>,
);
