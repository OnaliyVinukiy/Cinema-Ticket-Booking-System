import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header.jsx';
import Home from './pages/home.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
