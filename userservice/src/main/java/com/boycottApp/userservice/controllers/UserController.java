package com.boycottApp.userservice.controllers;

import com.boycottApp.userservice.entities.User;
import com.boycottApp.userservice.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static com.boycottApp.userservice.entities.Role.USER;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;


    @PostMapping("/signup")
    public ResponseEntity<Map<String, Object>> signUp(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();

        // Check if the username or email already exists
        if (userService.getUserByUsername(user.getUsername()).isPresent() ||
                userService.getUserByEmail(user.getEmail()).isPresent()) {
            response.put("message", "Username or email already exists!");
            return ResponseEntity.badRequest().body(response);
        }

        // Save the user and set default role
        user.setRole(USER);
        User savedUser = userService.saveUser(user);

        // Include user ID and success message in the response
        response.put("message", "User registered successfully!");
        response.put("userId", savedUser.getId());

        return ResponseEntity.ok(response);
    }



    // Login endpoint (POST request to authenticate the user)
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User loginUser) {
        // Search for the user by username or email
        Optional<User> userOptional = userService.getUserByUsername(loginUser.getUsername());

        // If user is found and passwords match, return the user
        if (userOptional.isPresent() && userOptional.get().getPassword().equals(loginUser.getPassword())) {
            return ResponseEntity.ok(userOptional.get());
        } else {
            // If no matching user or password does not match, return unauthorized
            return ResponseEntity.status(401).build();
        }
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteUser(@RequestBody User user, @PathVariable Long id) {
        Optional<User> userDeleted = userService.getUserById(id);
        if (userDeleted.isPresent()) {
            userService.deleteUser(userDeleted.get().getId());
            return ResponseEntity.noContent().build();
        } else
            return ResponseEntity.notFound().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getPerson(@PathVariable Long id) {
        Optional<User> user = userService.getUserById(id);
        if (user.isPresent()) {
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
