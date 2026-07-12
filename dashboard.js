let watches = JSON.parse(localStorage.getItem("watches")) || [];

document.getElementById("totalWatches").textContent = watches.length;

const watchTable = document.getElementById("watchTable");

watches.forEach(function (watch, index) {

    let status = "";

    if (Number(watch.stock) <= 5) {
        status = "<span class='low'>Low Stock</span>";
    } else {
        status = "<span class='available'>Available</span>";
    }

    watchTable.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${watch.image}</td>
            <td>${watch.watchName}</td>
            <td>${watch.brand}</td>
            <td>$${watch.price}</td>
            <td>${watch.stock}</td>
            <td>${status}</td>
        </tr>
    `;
});