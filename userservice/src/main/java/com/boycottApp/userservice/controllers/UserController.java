package com.boycottApp.userservice.controllers;


import com.boycottApp.userservice.entities.User;
import com.boycottApp.userservice.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping
    public User createPerson(@RequestBody User user) {
        return userService.saveUser(user);

    }
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteUser(@RequestBody User user, @PathVariable Long id) {
        Optional<User> userDeleted=userService.getUserById(id);
        if(userDeleted.isPresent()) {
            userService.deleteUser(userDeleted.get().getId());
            return ResponseEntity.noContent().build();
        }
        else
            return ResponseEntity.notFound().build();

    }


    @GetMapping("/{id}")
    public ResponseEntity<User> getPerson(@PathVariable Long id) {
        System.out.println("this is instant 1");
        Optional<User> user=userService.getUserById(id);
        if(user.isPresent()) {
            return ResponseEntity.ok(user.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updatePerson(@RequestBody User user, @PathVariable Long id) {

        Optional<User> userUpdated = userService.getUserById(id);
        if (userUpdated.isPresent()) {
            User existingUser = userUpdated.get();
            existingUser.setUsername(user.getUsername());
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(user.getPassword());
            existingUser.setRole(user.getRole());

            User updatedUser = userService.saveUser(existingUser);

            return ResponseEntity.ok(updatedUser);
        } else {

            return ResponseEntity.notFound().build();
        }
    }

}

