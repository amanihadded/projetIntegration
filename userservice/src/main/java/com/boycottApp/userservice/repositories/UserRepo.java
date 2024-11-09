package com.boycottApp.userservice.repositories;


import com.boycottApp.userservice.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}
