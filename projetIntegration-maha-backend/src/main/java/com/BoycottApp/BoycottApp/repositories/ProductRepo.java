package com.BoycottApp.BoycottApp.repositories;

import com.BoycottApp.BoycottApp.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository <Product, Long> {
}
