import { memo } from "react";

function Product({ name, price, category, brand, stock, onProductClick }) {

  return (
    <div>
      <p>naam: {name}</p>
      <p>merk: {brand}</p>
      <p>prijs: €{price}</p>
      <p>{price > 500 ? "Duur product" : "Betaalbaar product"}</p>
      <p>categorie: {category}</p>
      <p>Voorraad: {stock}</p>
      <p>{stock > 0 ? "Product is beschikbaar" : "Product is niet beschikbaar"}</p>
      <button onClick={() => onProductClick(name)}>Klik product</button>
    </div>
  );
}

// een parent-render waarbij de props van product hetzelfde blijven dan product wortdt niet opnieuw gerenderd
// export default Product; Zonder memo een parent-render dan product redert opnieuw
export default memo(Product); 