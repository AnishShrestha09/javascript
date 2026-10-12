const API = "https://dummyjson.com/products?limit=0"
const ALLCAT = "https://dummyjson.com/products/categories"



async function fetchproducts(){
    const response = await fetch(API)
    const products =await response.json()
    console.log(products)
    // renderProducts(products)
}


renderProducts()


fetchproducts()

