package com.autoscolombia.backend.DAO;

import com.autoscolombia.backend.model.Celda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface CeldaDAO extends JpaRepository<Celda, Integer> {
}
