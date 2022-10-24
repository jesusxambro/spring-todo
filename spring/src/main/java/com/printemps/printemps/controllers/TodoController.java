package com.printemps.printemps.controllers;


import com.printemps.printemps.dao.TodoRepository;
import com.printemps.printemps.model.Todo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/tasks")
public class TodoController {
    final private TodoRepository repository;

    public TodoController(TodoRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/")
    public List<Todo> getAllTasks(){
        return this.repository.findAll();
    }
    @PostMapping("/")
    public Todo addTask(@RequestBody Todo taskToAdd){
        return this.repository.save(taskToAdd);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        this.repository.deleteById(id);
    }

    @PatchMapping("/{id}")
    public Todo updateTask(@PathVariable Long id, @RequestBody Todo tasktoUpdate){
        Todo inDb = this.repository.getReferenceById(id);
        inDb.setTask(tasktoUpdate.getTask());
        inDb.setTitle(tasktoUpdate.getTitle());
        return this.repository.save(inDb);
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(NoSuchElementException.class)
    public String handleElementNotFound(Exception e) {
        return e.getMessage();
    }


}
