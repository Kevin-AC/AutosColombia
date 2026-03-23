package com.autoscolombia.backend.servicios;

import com.autoscolombia.backend.DAO.CeldaDAO;
import com.autoscolombia.backend.model.Celda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service; // <-- CRUCIAL


@Service
public class ParqueaderoServicio {

    @Autowired
    private CeldaDAO celdaRepo;

    public String ocuparCeldaManualmente(Integer idCelda, String placa) {

        Celda celda = celdaRepo.findById(idCelda)
                .orElseThrow(() -> new RuntimeException("Celda no encontrada con ID: " + idCelda));

        if ("Libre".equals(celda.getEstado())) {
            celda.setEstado("Ocupada");
            celda.setPlacaActual(placa);
            celdaRepo.save(celda);
            return "Celda " + idCelda + " asignada a " + placa;
        } else {
            return "La celda ya está ocupada o en mantenimiento";
        }
    }
}
