import { Footer as FooterUpdate } from "./components/Footer"; //named import
// import NavBar from "./components/Navbar"; //default import
import Products from "./components/Products";

const products = [
  { id: 1, name: "Nike Shoes", price: 10000, stock: 5, category: "Shoes" },
  { id: 2, name: "Wireless Mouse", price: 2000, stock: 0, category: "Electronics" },
  { id: 3, name: "Keyboard", price: 3000, stock: 8, category: "Electronics" },
  { id: 4, name: "T-shirt", price: 800, stock: 10, category: "Clothing" },
];
function App() {
  return (
    <div>
      <div style={{ backgroundColor: "yellow", color: "black" }}>
        {products
          .filter((p) => (p.stock > 0)&& (p.price <3000))
          .map((p) => {
            return (
              <div>
                <Products
                key={p.id}
                name={p.name}
                price={p.price}
                stock={p.stock}
                category={p.category}
                />
              </div>
            );
          })}
        
      </div>
    </div>
  );
}

export default App;
