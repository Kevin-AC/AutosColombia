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

    // 1. CREATE: Guardar un usuario nuevo (RF-04)
    @PostMapping
    public ResponseEntity<Usuario> guardarUsuario(@RequestBody Usuario usuario) {
        Usuario nuevoUsuario = usuarioRepo.save(usuario);
        return ResponseEntity.ok(nuevoUsuario);
    }

    // 2. READ: Obtener la lista de todos los usuarios
    @GetMapping
    public List<Usuario> listarTodos() {
        return usuarioRepo.findAll();
    }

    // 3. READ: Buscar un usuario específico por su cédula
    @GetMapping("/{cedula}")
    public ResponseEntity<Usuario> obtenerPorCedula(@PathVariable String cedula) {
        return usuarioRepo.findById(cedula)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 4. UPDATE: Actualizar datos de un usuario
    @PutMapping("/{cedula}")
    public ResponseEntity<Usuario> actualizar(@PathVariable String cedula, @RequestBody Usuario datosNuevos) {
        return usuarioRepo.findById(cedula).map(usuario -> {
            usuario.setNombre(datosNuevos.getNombre());
            usuario.setTelefono(datosNuevos.getTelefono());
            return ResponseEntity.ok(usuarioRepo.save(usuario));
        }).orElse(ResponseEntity.notFound().build());
    }

    // 5. DELETE: Eliminar un usuario
    @DeleteMapping("/{cedula}")
    public ResponseEntity<Void> eliminar(@PathVariable String cedula) {
        if (usuarioRepo.existsById(cedula)) {
            usuarioRepo.deleteById(cedula);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
