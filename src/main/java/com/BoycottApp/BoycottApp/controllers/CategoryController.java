package com.BoycottApp.BoycottApp.controllers;

import com.BoycottApp.BoycottApp.Services.CategoryService;
import com.BoycottApp.BoycottApp.entities.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @GetMapping
    public List<Category> getCategoryService() {
        return categoryService.getAllCategories();
    }
    @PostMapping
    public ResponseEntity<Category> addCategory(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return new ResponseEntity<>(category, HttpStatus.CREATED);
    }
}
