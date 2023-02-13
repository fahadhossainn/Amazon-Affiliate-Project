import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Login from './pages/Dashboard/Login';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App