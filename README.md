# 🛍️ Product Management System Using JDBC & Spring Boot

This is a simple **Spring Boot** project that performs **CRUD (Create, Read, Update, Delete)** operations on a product table using **JDBC**.  
It helps understand how to connect a Spring Boot application with a database and perform basic data operations without using ORM frameworks like Hibernate.

---

## 🚀 Features
- Add a new product  
- View all products  
- Get product details by ID  
- Update existing product  
- Delete a product  

---

## ⚙️ Technologies Used
- **Java 17+**  
- **Spring Boot**  
- **JDBC Template**  
- **Maven**

---

## 🧩 Project Overview
The project follows a simple layered structure:

Controller → Service → DAO → Database

Each layer has a clear responsibility:
- **Controller:** Handles HTTP requests  
- **Service:** Contains business logic  
- **DAO (Repository):** Handles database queries using JDBC  

---

## ▶️ How to Run
1. Import the project into **Spring Tool Suite (STS)** or **IntelliJ IDEA**.  
2. Build the project using Maven.  
3. Run the application using:
mvn spring-boot:run

---

## 🔗 API Endpoints (Example)
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/products` | Add a new product |
| GET | `/products` | View all products |
| GET | `/products/{id}` | Get product by ID |
| PUT | `/products/{id}` | Update product |
| DELETE | `/products/{id}` | Delete product |

---

## 📁 Project Structure
Product_Management_System_Using_JDBC_SPRINGBOOT/

│

├── controller/ # REST API controllers

├── service/ # Business logic layer

├── dao/ # JDBC operations

├── model/ # Product entity

└── resources/ # Config files and properties


---

### 🧠 Learning Outcome
This project helps you learn:
- How Spring Boot connects to a database using JDBC  
- How to organize a project with layered architecture  
- How CRUD operations work in backend systems  

---

**✨ Simple. Clear. Effective. Perfect for learning Spring Boot with JDBC.**
