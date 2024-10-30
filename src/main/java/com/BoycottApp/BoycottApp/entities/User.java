package com.BoycottApp.BoycottApp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;


    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Product> products;


    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Notification> notifications;
}
