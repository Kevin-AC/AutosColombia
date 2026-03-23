
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import GestionUsuarios from './pages/GestionUsuarios.jsx'
import GestionVehiculos from './pages/GestionVehiculos.jsx';
import GestionCeldas from './pages/GestionCeldas.jsx'
import GestionPagos from './pages/GestionPagos.jsx'
import GestionIncidentes from './pages/GestionIncidentes.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Usuarios" element={<GestionUsuarios />} />
      <Route path="/Vehiculos" element={<GestionVehiculos />} />
      <Route path="/Celdas" element={<GestionCeldas />} />
      <Route path="/Pagos" element={<GestionPagos />} />
      <Route path='/Incidentes' element={<GestionIncidentes/>}/>
      
    </Routes>
  </BrowserRouter>
)
