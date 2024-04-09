import React from 'react'
import Header from './Components/Header'
import { Footer } from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'

export default function App() {
  return (
      // <div>

      // </div>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
           
      </Routes>
  );
}
