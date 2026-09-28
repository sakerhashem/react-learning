function Product({ name, price, category, brand, stock }) {
    
  return (
    <div>
      <p>naam: {name}</p>
      <p>merk: {brand}</p>
      <p>prijs: €{price}</p>
      <p>{price > 500 ? "Duur product" : "Betaalbaar product"}</p>
      <p>categorie: {category}</p>
      <p>Voorraad: {stock}</p>
      <p>{stock > 0 ? "Product is beschikbaar" : "Product is niet beschikbaar"}</p>
    </div>
  );
}

export default Product;