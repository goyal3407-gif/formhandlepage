
import React from 'react';

export default function ProductList({ products, onDelete }) {
  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price (₹)</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.price.toFixed(2)}</td>
            <td>{p.category}</td>
            <td>
              <button
                onClick={() => onDelete(p.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
