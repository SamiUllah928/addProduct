import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";

export default function App() {
  return (
    <div className="app">
      <Header home="HOME" about="ABOUT" contact="CONTACT" faq="FAQ" />
      <Home />
    </div>
  );
}
