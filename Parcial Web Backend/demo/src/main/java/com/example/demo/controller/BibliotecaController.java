package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import com.example.demo.model.Biblioteca;
import com.example.demo.model.BibliotecaRepository;

@RestController
@RequestMapping("/api/bibliotecas")
public class BibliotecaController {

    private final BibliotecaRepository bibliotecaRepository;

    @Autowired
    public BibliotecaController(BibliotecaRepository bibliotecaRepository) {
        this.bibliotecaRepository = bibliotecaRepository;
    }

    @GetMapping
    public List<Biblioteca> getAllBibliotecas() {
        return bibliotecaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Biblioteca getBibliotecaById(@PathVariable Long id) {
        return bibliotecaRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Biblioteca createBiblioteca(@RequestBody Biblioteca biblioteca) {
        return bibliotecaRepository.save(biblioteca);
    }

    @PutMapping("/{id}")
    public Biblioteca updateBiblioteca(@PathVariable Long id, @RequestBody Biblioteca updatedBiblioteca) {
        Biblioteca existingBiblioteca = bibliotecaRepository.findById(id).orElse(null);

        if (existingBiblioteca != null) {
            existingBiblioteca.setNombre(updatedBiblioteca.getNombre());
            existingBiblioteca.setDireccion(updatedBiblioteca.getDireccion());
            existingBiblioteca.setCiudad(updatedBiblioteca.getCiudad());

            return bibliotecaRepository.save(existingBiblioteca);
        } else {
            return null; // Manejo de error, por ejemplo, lanzar una excepción
        }
    }

    @DeleteMapping("/{id}")
    public void deleteBiblioteca(@PathVariable Long id) {
        bibliotecaRepository.deleteById(id);
    }
}

