package com.autoscolombia.backend.Controller;

import com.autoscolombia.backend.DAO.UsuarioDao;
import com.autoscolombia.backend.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioDao usuarioRepo;


    @PostMapping
    public ResponseEntity<Usuario> guardarUsuario(@RequestBody Usuario usuario) {
        Usuario nuevoUsuario = usuarioRepo.save(usuario);
        return ResponseEntity.ok(nuevoUsuario);
    }


    @GetMapping
    public List<Usuario> listarTodos() {
        return usuarioRepo.findAll();
    }


    @GetMapping("/{cedula}")
    public ResponseEntity<Usuario> obtenerPorCedula(@PathVariable String cedula) {
        return usuarioRepo.findById(cedula)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PutMapping("/{cedula}")
    public ResponseEntity<Usuario> actualizar(@PathVariable String cedula, @RequestBody Usuario datosNuevos) {
        return usuarioRepo.findById(cedula).map(usuario -> {
            usuario.setNombre(datosNuevos.getNombre());
            usuario.setTelefono(datosNuevos.getTelefono());
            return ResponseEntity.ok(usuarioRepo.save(usuario));
        }).orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{cedula}")
    public ResponseEntity<Void> eliminar(@PathVariable String cedula) {
        if (usuarioRepo.existsById(cedula)) {
            usuarioRepo.deleteById(cedula);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
