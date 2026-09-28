import Product from './components/Product';
import User from './components/User';
import Book from './components/Book';
import Employee from './components/Employee';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import NameForm from './components/NameForm';
import NameInput from './components/NameInput';
import ProductCounter from './components/ProductCounter';

function App() {
  const products = [
  {
    id: 1,
    name: "Laptop",
    price: 899,
    category: "Electronics",
    brand: "Dell",
    inStock: true
  },
  {
    id: 2,
    name: "iPhone",
    price: 999,
    category: "Smartphone",
    brand: "Apple",
    inStock: false
  },
  {
    id: 3,
    name: "Keyboard",
    price: 79,
    category: "Accessories",
    brand: "Logitech",
    inStock: true
  },
  {
    id: 4,
    name: "Mouse",
    price: 39,
    category: "Accessories",
    brand: "Logitech",
    inStock: false
  }
];

  return (
    <div>
      <h1>Hello React!</h1>
      <Toggle />
      <NameInput />
      <NameForm />
      <User /><br />
      <div>
        <h2>Producten</h2>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            brand={product.brand}
            inStock={product.inStock}
          />
        ))}
      </div><br />
      <Book /><br />
      <Employee />
      <Counter />
      <div>
        <ProductCounter 
          name="Laptop"
          price={899}
        />
      
        <ProductCounter 
          name="Keyboard"
          price={79}
        />
      </div>
    </div>
  );
}

export default App;