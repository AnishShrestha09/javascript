const products = [
    {
        id: 1,
        name: "iPhone 15",
        price: 127499,
        category: "Phone",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd"
    },
    {
        id: 2,
        name: "Samsung Galaxy Phone",
        price: 95000,
        category: "Phone",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
    },
    {
        id: 3,
        name: "MacBook Air",
        price: 150000,
        category: "Laptop",
        image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8"
    },
    {
        id: 4,
        name: "Laptop",
        price: 100000,
        category: "Laptop",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    }
];


const productList = document.createElement("div");

productList.classList.add("product-list");


products.forEach((product) => {

    // Create card
    const card = document.createElement("div");

    card.classList.add("product-card");


    // Put product information inside card
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <h2>${product.price}</h2>
    `;


    // Create a NEW button for this card
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Remove cart";


    // Delete this particular card
    // deleteButton.addEventListener("click", () => {

    //     card.remove();

    // });


    // Put button inside card
    card.append(deleteButton);


    // Put card inside product list
    productList.append(card);

});


document.body.append(productList);


productList.addEventListener('click',(e)=>{
    console.log(e.target)
    console.log(e.currentTarget)
    if (e.target.tagName === "BUTTON"){
        console.log('button clicked')
        e.target.closest(".product-card").remove()
    }

})