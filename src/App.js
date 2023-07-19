import React, { useState } from 'react';
import Navigation from './componentes/Navigation';
import Card from './componentes/card/card';
import Cart from './componentes/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleDeleteItem = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div className="App">
      <Navigation toggleCart={toggleCart} />
      {showCart && (
        <Cart
          items={cartItems}
          handleDeleteItem={handleDeleteItem}
          handleCloseCart={handleCloseCart}
        />
      )}
      <Card
        name="Produto A"
        price="R$ 99.99"
        addToCart={() => handleAddToCart({ name: 'Produto A', price: 'R$ 99.99' })}
      />
      <Card
        name="Produto B"
        price="R$ 49.99"
        addToCart={() => handleAddToCart({ name: 'Produto B', price: 'R$ 49.99' })}
      />
      <Card
        name="Produto C"
        price="R$ 79.99"
        addToCart={() => handleAddToCart({ name: 'Produto C', price: 'R$ 79.99' })}
      />
      <Card
        name="Produto D"
        price="R$ 99.99"
        addToCart={() => handleAddToCart({ name: 'Produto D', price: 'R$ 99.99' })}
      />
      <Card
        name="Produto E"
        price="R$ 49.99"
        addToCart={() => handleAddToCart({ name: 'Produto E', price: 'R$ 49.99' })}
      />
      <Card
        name="Produto F"
        price="R$ 79.99"
        addToCart={() => handleAddToCart({ name: 'Produto F', price: 'R$ 79.99' })}
      />
    </div>
  );
}

export default App;
