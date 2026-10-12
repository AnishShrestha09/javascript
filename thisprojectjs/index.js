
const API = "https://dummyjson.com/products?limit=0";

const ALLCAT = "https://dummyjson.com/products/categories";

const productss = document.querySelector("#products");
const categories = document.querySelector("#categories");


function makecatbetter(category){
    return category.replace("-"," ")
}




async function fetchcat() {
    try {
        const response = await fetch(ALLCAT);
        const cat = await response.json();
        // console.log(cat)
        renderCat(cat);
    } catch (error) {
        console.log("Error fetching products:", error);
    }
}


fetchcat()

async function renderCat(cat) {

    cat.forEach((elem) => {
        const button = document.createElement("button")

        button.className = "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition duration-200 ease-in-out" 
        button.textContent = elem.name;
        button.dataset.name= elem.name;
        button.dataset.url = elem.url;
        categories.append(button)


    })

}


async function fetchproducts(API) {
    try {
        const response = await fetch(API);
        const products = await response.json();

        console.log(products.products);

        renderProducts(products.products);
    } catch (error) {
        console.log("Error fetching products:", error);
    }
}


function renderProducts(product) {
    productss.innerHTML = " "
    product.forEach(elem => {
        const div1 = document.createElement("div");

        div1.className =
            "flex gap-4 border-b border-slate-100 pb-5";

        div1.innerHTML = `
            <div class="w-24 h-24 shrink-0 bg-slate-100 rounded-lg flex items-center justify-center">
                <img
                    src= ${elem.thumbnail}
                    alt="Essence Mascara"
                    class="w-full h-full object-contain p-2"
                >
            </div>

            <div class="flex-1 min-w-0">
                <h2 class="font-semibold text-slate-900">
                    ${elem.title}
                </h2>

                <p class="text-sm text-slate-500 mt-1">
                     ${makecatbetter(elem.category)}
                </p>

                <p class="text-lg font-bold text-slate-900 mt-2">
                     $ ${elem.price}
                </p>
            </div>
        `;

        productss.append(div1);
    });
}

fetchproducts(API);



categories.addEventListener("click",(e)=>{
    e.stopPropagation();

    if(e.target.tagName==='BUTTON'){
        const button = e.target
        const url = button.dataset.url
        const API = url;
        fetchproducts(API)
    }

})
