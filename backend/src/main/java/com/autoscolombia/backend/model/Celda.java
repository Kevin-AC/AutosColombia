package com.autoscolombia.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "celdas")
@Data
public class Celda {
    @Id
    private Integer numeroCelda;

    private String estado;
    private String placaActual;

    // Getters y Setters

    public Integer getNumeroCelda() {
        return numeroCelda;
    }

    public void setNumeroCelda(Integer numeroCelda) {
        this.numeroCelda = numeroCelda;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getPlacaActual() {
        return placaActual;
    }

    public void setPlacaActual(String placaActual) {
        this.placaActual = placaActual;
    }
}
