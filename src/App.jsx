
import { useState } from 'react';
import './App.css';
import ProductForm from './compnents/ProductForm';
import ProductList from './compnents/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addProduct = (product) => {
    const newProduct = {
      id: Date.now(),
      ...product

    };

    setProducts((prev) => [...prev, newProduct]);
  };

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' ||
      p.category === selectedCategory;

    return matchSearch && matchesCategory;
  });

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Product Management App</h1>

      <ProductForm onAdd={addProduct} />

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <ProductList
        products={filteredProducts} onDelete={deleteProduct}
      />
    </div>
  );
}

export default App;
