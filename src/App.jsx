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
  
  return (
    <div>
      <Toggle />
      <NameInput />
      <h1>Hello React!</h1>
      <NameForm />
      <User /><br />
      <div>
        <h2>Producten</h2>
        <Product
          name="Laptop"
          price={899}
          category="Electronics"
          brand="Dell"
          inStock={true}
        />

        <Product
          name="iPhone"
          price={999}
          category="Smartphone"
          brand="Apple"
          inStock={false}
        />

        <Product
          name="Keyboard"
          price={79}
          category="Accessories"
          brand="Logitech"
          inStock={true}
        />

        <Product
          name="Mouse"
          price={39}
          category="Accessories"
          brand="Logitech"
          inStock={false}
        />
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