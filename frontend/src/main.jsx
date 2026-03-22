
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import GestionUsuarios from './pages/GestionUsuarios.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Usuarios" element={<GestionUsuarios />} />
    </Routes>
  </BrowserRouter>
)
