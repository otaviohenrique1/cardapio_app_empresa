import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './Login';
import { NovoUsuario } from './NovoUsuario';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/novo_usuario" element={<NovoUsuario />} />
      </Routes>
    </BrowserRouter>
  )
}
