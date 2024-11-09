package com.BoycottApp.BoycottApp.controllers;

import com.BoycottApp.BoycottApp.DTO.ProductDTO;
import com.BoycottApp.BoycottApp.DTO.ResponseProductDTO;
import com.BoycottApp.BoycottApp.DTO.SubmissionDTO;
import com.BoycottApp.BoycottApp.DTO.UserDTO;
import com.BoycottApp.BoycottApp.Services.CategoryService;
import com.BoycottApp.BoycottApp.Services.ProductService;
import com.BoycottApp.BoycottApp.entities.Category;
import com.BoycottApp.BoycottApp.entities.ProdType;
import com.BoycottApp.BoycottApp.entities.Product;
import com.BoycottApp.BoycottApp.proxy.SubmissionService;
import com.BoycottApp.BoycottApp.proxy.UserService;
import com.BoycottApp.BoycottApp.repositories.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private SubmissionService submissionService;


    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private CategoryService categoryService;
    @Autowired
    private UserService userService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }


    @GetMapping("service/user/{id}")
    public UserDTO getUserById(@PathVariable long id) {

        return userService.getPerson(id);
    }


    @GetMapping("service/sub/{id}")
    public SubmissionDTO getSubById(@PathVariable String id) {

        return submissionService.getSubmission(id);
    }

    /*@GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        if (product != null) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }*/

    @PostMapping("/create")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        productService.addProduct(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }


    @GetMapping("get-all")
    public ResponseEntity<List<ResponseProductDTO>> getAllProduct() {
        List<Product> productList = this.productRepo.findAll();
        List<ResponseProductDTO> responseProductDTOList = new ArrayList<>();
        for (Product p : productList) {
            UserDTO userDTO = userService.getPerson(p.getUserId());
            ResponseProductDTO responseProductDTO = new ResponseProductDTO();
            responseProductDTO.setId(p.getId());
            responseProductDTO.setName(p.getName());
            responseProductDTO.setCategory(p.getCategory());
            responseProductDTO.setRaison(p.getRaison());
            responseProductDTO.setBrand(p.getBrand());
            responseProductDTO.setIsBoycotted(p.getIsBoycotted());
            responseProductDTO.setBarCode(p.getBarCode());

            responseProductDTO.setUser(userDTO);
            responseProductDTOList.add(responseProductDTO);

        }
        return ResponseEntity.ok(responseProductDTOList);
    }


    @PostMapping("/PostVersion2")
    public ResponseEntity<Product> createProduct(@RequestBody ProductDTO productDTO) {
/*        Optional<User> userOptional = userService.getUserById(productDTO.getUserId());

        if (!userOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        User user = userOptional.get();*/

        Optional<Category> categoryOptional = categoryService.getCategoryById(productDTO.getCategoryId());
        if (!categoryOptional.isPresent()) {
            return ResponseEntity.badRequest().body(null);
        }
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setBarCode(productDTO.getBarCode());
        product.setBrand(productDTO.getBrand());
        product.setIsBoycotted(productDTO.getIsBoycotted());
        product.setRaison(productDTO.getRaison());
        product.setProdType(ProdType.valueOf(productDTO.getProdType()));
        product.setUserId(productDTO.getUserId());
        product.setSubmissionId(productDTO.getSubmissionId());
        // product.setUser(user);
        product.setCategory(categoryOptional.get());
        Product savedProduct = productService.addProduct(product);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedProduct);
    }



  /*  @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Optional<Product> productOptional = productRepo.findById(id);
        if (productOptional.isPresent()) {
            Product product = productOptional.get();


            product.setName(productDetails.getName());
            product.setBarCode(productDetails.getBarCode());
            product.setBrand(productDetails.getBrand());
            product.setCategory(productDetails.getCategory());
            product.setIsBoycotted(productDetails.getIsBoycotted());


            Product updatedProduct = productRepo.save(product);
            return ResponseEntity.ok(updatedProduct);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

*/
  /*  @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        if (product != null) {
            productService.deleteProduct(product);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }*/
}