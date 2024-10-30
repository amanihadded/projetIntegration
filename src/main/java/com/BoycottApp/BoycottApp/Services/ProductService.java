package com.BoycottApp.BoycottApp.Services;

import com.BoycottApp.BoycottApp.entities.Product;
import com.BoycottApp.BoycottApp.repositories.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepo productRepo;
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }
    public Product getProductById(Long id) {
        return productRepo.findById(id).get();
    }
    public Product addProduct(Product product) {
        productRepo.save(product);
        return product;
    }
    public void updateProduct(Product product) {
        productRepo.save(product);
    }
    public void deleteProduct(Product product) {
    productRepo.delete(product);
    }


}
