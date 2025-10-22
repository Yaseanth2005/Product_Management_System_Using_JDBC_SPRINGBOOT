package test.product.controller;

import org.springframework.web.bind.annotation.*; // include all HTTP annotations
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import test.product.entity.Product;
import test.product.service.ProductService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products") // <-- use plural
public class ProductController {

    @Autowired
    private ProductService service;

    @PostMapping
    public Product addProduct(@RequestBody Product pro) {
        return service.save(pro);
    }

    @GetMapping
    public List<Product> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Product> getProduct(@PathVariable Long id) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product updateProduct) {
        updateProduct.setId(id);
        return service.update(id, updateProduct);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        service.delete(id);
    }
}
