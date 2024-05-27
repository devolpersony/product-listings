import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../slices/cartSlice';
import '../App.css';

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateCart = (product, quantity) => {
    dispatch(updateCart({ ...product, quantity: parseInt(quantity, 10) }));
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
            <input
              type="number"
              value={product.quantity || 1}
              onChange={(e) => handleUpdateCart(product, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;