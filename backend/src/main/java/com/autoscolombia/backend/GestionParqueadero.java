package com.autoscolombia.backend;

import com.autoscolombia.backend.DAO.CeldaDAO;
import com.autoscolombia.backend.DAO.UsuarioDao;
import com.autoscolombia.backend.model.Celda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class GestionParqueadero {
    @Autowired
    private CeldaDAO celdaRepo;

    @Autowired
    private UsuarioDao usuarioRepo;


    public String asignarVehiculoACelda(Integer idCelda, String placa) {
        Celda celda = celdaRepo.findById(idCelda).orElse(null);

        if (celda != null && "Libre".equals(celda.getEstado())) {
            celda.setEstado("Ocupada");
            celda.setPlacaActual(placa);
            celdaRepo.save(celda);
            return "Asignación exitosa";
        }
        return "Error: Celda no disponible";
    }
}
