package com.example.demo.controller;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//import org.springframework.ui.Model;

import com.example.demo.model.Libro;
import com.example.demo.model.LibroRepository;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class LibroController {

    private final LibroRepository bookRepository;

    public LibroController(LibroRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping
    public List<Libro> getAllBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/{id}")
    public Libro getBookById(@PathVariable Long id) {
        return bookRepository.findById(id).orElse(null);
        //Optional<Libro> libro = bookRepository.findById(id);
        //return libro.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Endpoint para insertar un nuevo libro
    @PostMapping
    public ResponseEntity<Libro> insertarLibro(@RequestBody Libro libro) {
        Libro nuevoLibro = bookRepository.save(libro);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoLibro);
    }

    //Innecesario

    @PostMapping
    public Libro createBook(@RequestBody Libro book) {
        return bookRepository.save(book);
    }

    @PutMapping("/{id}")
    public Libro updateBook(@PathVariable Long id, @RequestBody Libro updatedBook) {
        Libro existingBook = bookRepository.findById(id).orElse(null);

        if (existingBook != null) {
            existingBook.setName(updatedBook.getName());
            existingBook.setAuthor(updatedBook.getAuthor());
            existingBook.setLibrary(updatedBook.getLibrary());

            return bookRepository.save(existingBook);
        } else {
            return null; // Manejo de error, por ejemplo, lanzar una excepción
        }
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookRepository.deleteById(id);
    }


}

