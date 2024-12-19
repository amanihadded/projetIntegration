package com.BoycottApp.BoycottApp.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Suggest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private Type type;
    private String brandName;
    private String proofUrl;
    private String reasonWhy;
    private String alternativeOf;
    private String userName;
    private Boolean liked=false;


}
