const form = document.getElementById("watchForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const watchName = document.getElementById("watchName").value;
    const brand = document.getElementById("brand").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;
    const supplier = document.getElementById("supplier").value;
    const image = document.getElementById("image").files[0];

    if (
        watchName === "" ||
        brand === "Select Brand" ||
        price === "" ||
        stock === "" ||
        supplier === "" ||
        !image
    ) {
        alert("Please fill all fields.");
        return;
    }

    const watch = {
        watchName: watchName,
        brand: brand,
        price: price,
        stock: stock,
        supplier: supplier,
        image: image.name
    };

    let watches = JSON.parse(localStorage.getItem("watches")) || [];

    watches.push(watch);

    localStorage.setItem("watches", JSON.stringify(watches));

    alert("Watch added successfully!");

    form.reset();

});