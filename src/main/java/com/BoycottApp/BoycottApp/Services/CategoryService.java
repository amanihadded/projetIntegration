package com.BoycottApp.BoycottApp.Services;

import com.BoycottApp.BoycottApp.entities.Category;
import com.BoycottApp.BoycottApp.repositories.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    CategoryRepo categoryRepo;
    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }
    public Optional<Category> getCategoryById(Long id) {
        return categoryRepo.findById(id);
    }
    public Category saveCategory(Category category) {
        return categoryRepo.save(category);
    }
    public void deleteCategory(Category category) {
        categoryRepo.delete(category);
    }

}
