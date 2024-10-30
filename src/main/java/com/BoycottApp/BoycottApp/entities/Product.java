package com.BoycottApp.BoycottApp.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Long BarCode;
    private String Brand;
    private Boolean IsBoycotted ;
    private String Raison;

    @Enumerated(EnumType.STRING)
    private ProdType prodType;

    @ManyToOne
    private User user;

    @ManyToOne
    private Category category;
}
