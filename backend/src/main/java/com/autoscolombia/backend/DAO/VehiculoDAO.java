package com.autoscolombia.backend.DAO;

import com.autoscolombia.backend.model.Vehiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehiculoDAO extends JpaRepository<Vehiculo, String> {

}
