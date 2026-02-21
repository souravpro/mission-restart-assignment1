const loadCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((arjo) => displayCategories(arjo))
}

const displayCategories = (categories) => {
    const allCategories = document.getElementById("all-categories");
    // allCategories.innerHTML = "";

    categories.forEach(category => {
        const categoryBtn = document.createElement("div");
        categoryBtn.innerHTML = `
            <button class="btn btn-active rounded-full hover:bg-blue-600">${category}</button>
        `;
        allCategories.appendChild(categoryBtn);

    });
}

loadCategories()