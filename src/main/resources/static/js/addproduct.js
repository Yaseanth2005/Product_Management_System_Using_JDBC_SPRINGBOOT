document.getElementById("addForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const product = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        price: document.getElementById("price").value
    };

    fetch("http://localhost:8086/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => alert("Product Added: " + JSON.stringify(data)))
    .catch(err => alert("Error: " + err));
});
