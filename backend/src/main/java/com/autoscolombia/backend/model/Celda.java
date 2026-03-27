package com.autoscolombia.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "celdas")
@Data
public class Celda {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    //@Column(unique = true, length = 10)
    private Integer numeroCelda;
    //private String codigo;
    private String estado;
    private String placaActual;



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
