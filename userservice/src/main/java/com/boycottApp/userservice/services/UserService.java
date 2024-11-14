package com.boycottApp.userservice.services;

import com.boycottApp.userservice.entities.User;
import com.boycottApp.userservice.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;
    public User saveUser(User user) {
        return userRepo.save(user);
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepo.findById(id);
    }
    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }
    public User updateUser(User user) {
        return userRepo.save(user);
    }


}
