import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from 'src/pages/Home';

import apiClient from 'src/api/client';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

