function deleteProduct() {
    const id = document.getElementById("id").value;

    fetch("http://localhost:8086/api/products/" + id, {
        method: "DELETE"
    })
    .then(() => alert("Product Deleted"))
    .catch(err => alert("Error: " + err));
}
