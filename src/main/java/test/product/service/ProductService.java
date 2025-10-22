package test.product.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import test.product.entity.Product;
import test.product.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    // Save a new product
    public Product save(Product product) {
        return repository.save(product);
    }

    // Get all products
    public List<Product> getAll() {
        return repository.findAll();
    }

    // Get product by ID
    public Optional<Product> getById(Long id) {
        return repository.findById(id);
    }

    // Update product details
    public Product update(Long id, Product updatedProduct) {
        return repository.findById(id).map(product -> {
            product.setName(updatedProduct.getName());
            product.setDepartment(updatedProduct.getDepartment());
            product.setPrice(updatedProduct.getPrice());
            return repository.save(product);
        }).orElseThrow(() -> new RuntimeException("Product not found with id: " + id));
    }

    // Delete product by ID
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
