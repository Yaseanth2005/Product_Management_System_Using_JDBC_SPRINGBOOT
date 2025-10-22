function viewAll() {
    fetch("http://localhost:8086/api/products")  // ✅ Correct URL
        .then(res => {
            if (!res.ok) throw new Error("Failed to fetch");
            return res.json();
        })
        .then(data => {
            const tableBody = document.getElementById("productTableBody");
            const noData = document.getElementById("noData");
            tableBody.innerHTML = "";
            noData.innerHTML = "";

            if (data.length === 0) {
                noData.innerText = "No products found.";
                return;
            }

            data.forEach(p => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${p.id}</td>
                    <td>${p.name}</td>
                    <td>${p.department}</td>
                    <td>₹${p.price}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(err => {
            document.getElementById("noData").innerText = "⚠️ " + err.message;
        });
}
