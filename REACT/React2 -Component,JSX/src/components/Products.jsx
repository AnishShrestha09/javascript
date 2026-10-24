function Products(props) {
//   console.log(props);
  return (
    <div>
      <p>{props.category}</p>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.stock > 0 ? "INstock" : "Out of stock"}</p>
      <br />
    </div>
  );
}

export default Products;
