function Product({ name, price, category, brand, inStock }) {
    
  return (
    <div>
      <p>naam: {name}</p>
      <p>merk: {brand}</p>
      <p>prijs: €{price}</p>
      <p>{price > 500 ? "Duur product" : "Betaalbaar product"}</p>
      <p>categorie: {category}</p>
      <p>Op voorraad: {inStock ? "Op voorraad" : "Niet op voorraad"}</p>
    </div>
  );
}

export default Product;