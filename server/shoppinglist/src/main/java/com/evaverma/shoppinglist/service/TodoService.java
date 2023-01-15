package com.evaverma.shoppinglist.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.evaverma.shoppinglist.model.Todo;

@Service
public class TodoService {

    ArrayList<Todo> todoList = new ArrayList<>();

    // Add todo to list
    // Input : Todo
    // Validate Todo and add to the list.
    // if added, return true
    // if not added, return false.
    public boolean addTodo(Todo todo) {

        // If status is not either todo or done, its invalid todo.
        if (!todo.getStatus().equals("todo") && !todo.getStatus().equals("done")) {
            return false;
        }
        for (Todo todo_ : todoList) {
            if(todo.getId().equals(todo_.getId())){
                return false;
            }
            
        }

        todoList.add(todo);
        return true;
    }

    // Get list of todos.
    // Input: Nothing
    // Return: List of Todos.

    public ArrayList<Todo> getTodos() {
        return todoList;
    }

    // Get todo by id
    // Input: Id
    // Return : todo .

    public Todo getTodoById(String id) {
        // check all todolist if found by is then it that id todo
        for (Todo todo : todoList) {
            if (todo.getId().equalsIgnoreCase(id)) {
                return todo;
            }
        }
        // if not found by thst id then return null
        return null;
    }

    // Delete todo by id
    // input: Id
    // Return : void
    // if deleted : Return No Content
    // if not found : Return Not Found

    public boolean deleteTodo(String id) {
        for (Todo todo : todoList) {
            if (todo.getId().equals(id)) {
                todoList.remove(todo);
                return true;
            }
        }
        return false;
    }

    // Update todo 
    // Input - todo
    // Return - todo

    public Todo updateTodo(Todo todo){
        for (Todo todoInList : todoList) {
            if (todoInList.getId().equals(todo.getId())){
                todoInList.setTitle(todo.getTitle());
                todoInList.setStatus(todo.getStatus());
                return todo;
            }
        }
        return null;
    }



}


