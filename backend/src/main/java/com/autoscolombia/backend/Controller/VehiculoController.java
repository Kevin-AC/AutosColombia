package com.autoscolombia.backend.Controller;

import com.autoscolombia.backend.DAO.VehiculoDAO;
import com.autoscolombia.backend.model.Vehiculo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehiculos")
@CrossOrigin(origins = "*")


public class VehiculoController {
    @Autowired
    private VehiculoDAO vehiculoRepo;


    @PostMapping
    public ResponseEntity<Vehiculo> registrarVehiculo(@RequestBody Vehiculo vehiculo) {
        return ResponseEntity.ok(vehiculoRepo.save(vehiculo));
    }


    @GetMapping
    public List<Vehiculo> listarVehiculos() {
        return vehiculoRepo.findAll();
    }


    @GetMapping("/{placa}")
    public ResponseEntity<Vehiculo> obtenerPorPlaca(@PathVariable String placa) {
        return vehiculoRepo.findById(placa)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
