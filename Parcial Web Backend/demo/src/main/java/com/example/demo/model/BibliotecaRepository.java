package com.example.demo.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BibliotecaRepository extends JpaRepository<Biblioteca, Long> {
    // Puedes agregar métodos de consulta personalizados aquí si es necesario
}
