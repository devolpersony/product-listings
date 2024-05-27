import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import ProductDetails from './ProductDetails';
import '../App.css';

function ProductList() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3 onClick={() => handleProductClick(product)}>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      {selectedProduct && <ProductDetails product={selectedProduct} />}
    </div>
  );
}

export default ProductList;