import Product from './components/Product';
import User from './components/User';
import Book from './components/Book';
import Employee from './components/Employee';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import NameForm from './components/NameForm';
import NameInput from './components/NameInput';
import ProductCounter from './components/ProductCounter';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    if(savedProducts) {
      return JSON.parse(savedProducts);
    }

    return [
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
  });


  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productStock, setProductStock] = useState('');
  const [showProducts, setShowProducts] = useState(true);
  const [showExpensive, setShowExpensive] = useState(false);
  const [error, setError] = useState('');
  const [editingProductId, setEditingProductId] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const availableProducts = products.filter((product) => product.stock > 0);
  const expensiveProducts = products.filter((product) => product.stock > 0 && product.price > 100);
  const selectedProduct = products.find((product) => product.id === selectedProductId);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) && (categoryFilter === '' || product.category === categoryFilter)
  );
  const categories = [...new Set(products.map((product) => product.category))];  // Set zorgt ervoor dat er geen dubbele categorieën in de array komen
  
  
  let displayedProducts = [...products];

  displayedProducts = displayedProducts.filter((product) => 
    product.name.toLowerCase().includes(search.toLowerCase()) && (categoryFilter === '' || product.category === categoryFilter));

  if (sortOrder === "low-high") {
    displayedProducts.sort((a,b) => a.price - b.price);
  }

  if (sortOrder === "high-low") {
    displayedProducts.sort((a,b) => b.price - a.price);
  }

  useEffect(() => {
    console.log("Products zijn veranderd: ", products)
  }, [products]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    if(selectedProductId !== null) {
      console.log("Geselecteerd product: ", selectedProductId);
    }
  }, [selectedProductId]);

  const increaseStock = (id) => {
    setProducts(
      products.map((product) => 
        product.id === id
        ? { 
            ...product,
            stock: product.stock + 1 
          }
        : product
        )
      );
  };

  const decreaseStock = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id 
      ? { 
        ...product,
        stock: product.stock > 0 ? product.stock - 1 : 0
        }
      : product
      )
    );
  };

  const addProduct = () => {
    if (
      productName.trim() === "" || 
      productPrice === "" || 
      productCategory.trim() === "" || 
      productBrand.trim() === "" || 
      productStock === "" ||
      Number(productPrice) < 0 ||
      Number(productStock) < 0
    ) {
      setError("Vul alle velden in met correcte waarden.");
      return;
    }
    
    if (editingProductId !== null) {
      const editProduct = {
        id: editingProductId,
        name: productName,
        price: Number(productPrice),
        category: productCategory,
        brand: productBrand,
        stock: Number(productStock)
      };
      
      setProducts(
        products.map((product) => 
          product.id === editingProductId ? editProduct : product
        )
      );

      setEditingProductId(null);
      setProductName("");
      setProductPrice("");
      setProductCategory("");
      setProductBrand("");
      setProductStock("");
      setError("");

      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: Number(productPrice),
      category: productCategory,
      brand: productBrand,
      stock: Number(productStock)
    };

    setProducts([...products, newProduct]);
    setProductName("");
    setProductPrice("");
    setProductCategory("");
    setProductBrand("");
    setProductStock("");
    setError("");
  };

  const startEdit = (id) => {
    const product = products.find((product) => product.id === id);

    setEditingProductId(product.id);
    setProductName(product.name);
    setProductPrice(product.price);
    setProductCategory(product.category);
    setProductBrand(product.brand);
    setProductStock(product.stock);
  };

  const deleteProduct = (id) => {
    setProducts(
      products.filter((product) => product.id !== id)
    );
  };
  

  return (
    <div>
      <h1>Hello React!</h1>
      <Toggle />
      <NameInput />
      <NameForm />
      <User /><br />
      <button onClick={() => setShowProducts(!showProducts)}>
          {showProducts ? "Verberg producten" : "Toon producten"}
      </button>
      {showProducts && ( 
        <><div>
            <h2>Producten</h2>

            <input                                      // zoekveld voor productnaam
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Zoek product..."
            />

            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>   // dropdown voor categorie filter
              <option value="">Alle categorieen</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="">Geen sortering</option>
              <option value="low-high">Prijs: laag - hoog</option>
              <option value="high-low">Prijs: hoog - laag</option>
            </select>

            <br />

            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Productnaam"
            />
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Prijs"
            />
            <input 
              type="text"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              placeholder="Categorie"
            />
            <input 
              type="text"
              value={productBrand}
              onChange={(e) => setProductBrand(e.target.value)}
              placeholder="Merk"
            />
            <input 
              type="number"
              value={productStock}
              onChange={(e) => setProductStock(e.target.value)}
              placeholder="Voorraad"
            />

            <button onClick={addProduct}>
              {editingProductId === null ? "Product toevoegen" : "Product opslaan"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {displayedProducts.length === 0 ? (
              <p>Geen producten gevonden.</p>
            ) : (
              displayedProducts.map((product) => (
                <div key={product.id}>
                  <Product
                    name={product.name}
                    price={product.price}
                    category={product.category}
                  brand={product.brand}
                  stock={product.stock} 
                />

                <button onClick={() => increaseStock(product.id)}>
                  +
                </button>
                <button onClick={() => decreaseStock(product.id)}>
                  -
                </button>
                <button onClick={() => startEdit(product.id)}>
                  Bewerken
                </button>
                <button onClick={() => setSelectedProductId(product.id)}>
                  Selecteer
                </button>
                <button onClick={() => deleteProduct(product.id)}>
                  Verwijderen
                </button>
               </div> 
                )
              )
            )}

            {selectedProduct && (
              <div>
                <h3>Geselecteerd product</h3>
                <p>Naam: {selectedProduct.name}</p>
                <p>Prijs: €{selectedProduct.price}</p>
                <p>Voorraad: {selectedProduct.stock}</p>
                <button onClick={() => setSelectedProductId(null)}>
                  Deselecteer product
                </button>
              </div>
            )}
            
            </div><br /></>
       )}
       <button onClick={() => setShowExpensive(!showExpensive)}>
          {showExpensive ? "Verberg dure producten" : "Toon dure producten"}
       </button>
       {showExpensive && (
          <><div>
            <h2>Dure producten op voorraad</h2>
            {expensiveProducts.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                brand={product.brand}
                stock={product.stock} />
            ))}
          </div></>
        )}      
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