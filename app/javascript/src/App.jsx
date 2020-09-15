import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from 'src/pages/Home';
import Folder from 'src/pages/Folder';

import apiClient from 'src/api/client';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/folders/:id" element={<Folder />}/>
      </Routes>
    </BrowserRouter>
  )
}

