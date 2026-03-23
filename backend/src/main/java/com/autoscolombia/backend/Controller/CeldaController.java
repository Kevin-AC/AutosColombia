package com.autoscolombia.backend.Controller;

import com.autoscolombia.backend.DAO.CeldaDAO;
import com.autoscolombia.backend.model.Celda;
import com.autoscolombia.backend.servicios.ParqueaderoServicio; // Revisa si corregiste a "servicios"
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/celdas")
@CrossOrigin(origins = "*")
public class CeldaController {
    @Autowired
    private CeldaDAO celdaRepo;

    @Autowired
    private ParqueaderoServicio parqueaderoServicio;


    @GetMapping
    public List<Celda> listarCeldas() {
        return celdaRepo.findAll();
    }

    @PostMapping("/ocupar/{idCelda}/{placa}")
    public ResponseEntity<String> ocuparCelda(@PathVariable Integer idCelda, @PathVariable String placa) {
        try {
            String resultado = parqueaderoServicio.ocuparCeldaManualmente(idCelda, placa);
            return ResponseEntity.ok(resultado);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


    @PutMapping("/liberar/{idCelda}")
    public ResponseEntity<Celda> liberarCelda(@PathVariable Integer idCelda) {
        return celdaRepo.findById(idCelda).map(celda -> {
            celda.setEstado("Libre");
            celda.setPlacaActual(null);
            return ResponseEntity.ok(celdaRepo.save(celda));
        }).orElse(ResponseEntity.notFound().build());
    }
}
