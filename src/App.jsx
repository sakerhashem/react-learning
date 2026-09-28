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
      stock: 5
    },
    {
      id: 2,
      name: "iPhone",
      price: 999,
      category: "Smartphone",
      brand: "Apple",
      stock: 0
    },
    {
      id: 3,
      name: "Keyboard",
      price: 79,
      category: "Accessories",
      brand: "Logitech",
      stock: 10
    },
    {
      id: 4,
      name: "Mouse",
      price: 39,
      category: "Accessories",
      brand: "Logitech",
      stock: 7
    }
  ];

  const availableProducts = products.filter((product) => product.stock > 0);
  const expensiveProducts = products.filter((product) => product.stock > 0 && product.price > 100);

  return (
    <div>
      <h1>Hello React!</h1>
      <Toggle />
      <NameInput />
      <NameForm />
      <User /><br />
      <div>
        <h2>Producten</h2>
        {availableProducts.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            brand={product.brand}
            stock={product.stock}
          />
        ))}
      </div><br />
      <div>
        <h2>Dure producten op voorraad</h2>
        {expensiveProducts.map((product) => (
          <Product 
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            brand={product.brand}
            stock={product.stock}
          />
        ))}
      </div>
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