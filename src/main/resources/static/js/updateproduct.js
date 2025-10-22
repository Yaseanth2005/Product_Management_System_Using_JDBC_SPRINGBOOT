document.getElementById("updateForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("id").value;

    const product = {
        id: id,
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        price: document.getElementById("price").value
    };

    fetch("http://localhost:8086/api/products/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => alert("Product Updated: " + JSON.stringify(data)))
    .catch(err => alert("Error: " + err));
});
