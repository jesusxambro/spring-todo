package com.printemps.printemps.dao;

import com.printemps.printemps.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {

    List<Todo> findByTitle(String title);
    List<Todo>  findByTask(String task);


}
