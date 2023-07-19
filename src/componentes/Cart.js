import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Cart = ({ items, handleDeleteItem, handleCloseCart }) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={handleCloseCart}
      contentLabel="Carrinho"
    >
      <h2>Carrinho</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
            <button onClick={() => handleDeleteItem(index)}>Deletar</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCloseCart}>Voltar</button>
    </Modal>
  );
};

export default Cart;
