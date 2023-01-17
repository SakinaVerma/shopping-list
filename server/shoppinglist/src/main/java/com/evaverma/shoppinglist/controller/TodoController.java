package com.evaverma.shoppinglist.controller;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.evaverma.shoppinglist.model.Todo;
import com.evaverma.shoppinglist.service.TodoService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TodoController {

    @Autowired
    TodoService todoService = new TodoService();

    // Method to get the list of todos.
    // Input: nothing
    // Return: List of todos.

    @GetMapping("/todos")
    ResponseEntity<ArrayList<Todo>> getTodos() {

        // Get list of todos from service.
        ArrayList<Todo> todoList = todoService.getTodos();

        return new ResponseEntity<>(todoList, HttpStatus.OK);
    }

    // Get Todo by id
    // Input : id
    // return : todo
    // Status : code
    // if found then return "Ok"
    // if not found then return "not found"
    @GetMapping("/todo/{id}")
    ResponseEntity<Todo> getTodoById(@PathVariable String id) {
        // get todo by id from service
        Todo todo = todoService.getTodoById(id);

        // if Service return null then responce status will be not found
        if (todo == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        // respond with todo
        return new ResponseEntity<>(todo, HttpStatus.OK);
    }
    // delete todo by id
    // input : id
    // return: void
    // status : code
    // if deleted then return : "NO CONTENT"
    // if not found then return : "NOT Found"

    @DeleteMapping("/todo/{id}")
    ResponseEntity<Todo> deleteTodo(@PathVariable String id) {
        boolean todo = todoService.deleteTodo(id);

        if (todo == true) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Method to add a new todo to the existing list.
    // Input : Todo
    // Return : Todo
    // Status Code.
    // If added Status.CREATED.
    // If bad reqeust . Status.BAD_REQUEST.
    @PostMapping("/todo")
    ResponseEntity<Todo> addTodo(@RequestBody Todo todo) {

        // Add the todo to the list.
        boolean result = todoService.addTodo(todo);
        if (result == false) {
            return new ResponseEntity<>(todo, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(todo, HttpStatus.CREATED);
    }

    // update existing Todo by id
    // input : id
    // // if todo found and updated : Status OK
    // if not found : Return Not Found
    // Upadte the existing todo
    @PutMapping("/todo")
    ResponseEntity<Todo> updateTodo(@RequestBody Todo todo) {
        Todo returnedTodo = todoService.updateTodo(todo);

        if (returnedTodo == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(todo, HttpStatus.OK);
    }

}
