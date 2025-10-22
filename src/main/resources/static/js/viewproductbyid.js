document.getElementById("viewForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    const id = document.getElementById("id").value;
    const resultDiv = document.getElementById("result");

    if (!id) {
        resultDiv.style.display = "block";
        resultDiv.innerHTML = "<span style='color: red;'>⚠️ Please enter a valid Product ID</span>";
        return;
    }

    fetch(`http://localhost:8086/api/products/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Product not found");
            }
            return response.json();
        })
        .then(p => {
            resultDiv.style.display = "block";
            resultDiv.innerHTML = `
                <strong>ID:</strong> ${p.id} <br>
                <strong>Name:</strong> ${p.name} <br>
                <strong>Department:</strong> ${p.department} <br>
                <strong>Price:</strong> ₹${p.price}
            `;
        })
        .catch(error => {
            resultDiv.style.display = "block";
            resultDiv.innerHTML = `<span style="color:red;">⚠️ ${error.message}</span>`;
        });
});
