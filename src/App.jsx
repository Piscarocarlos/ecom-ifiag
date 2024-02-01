import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoryProducts from "./pages/CategoryProducts";



function App() {

  
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category" element={<CategoryProducts/>} />
      </Routes>
    </>
  )
}

export default App
