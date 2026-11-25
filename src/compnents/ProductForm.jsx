
import React, { useState } from 'react';

const ProductForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Electronics');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name: name.trim(),
      price: parseFloat(price),
      category
    };

    onAdd(newProduct);

    setName('');
    setPrice('');
    setCategory('Electronics');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
