import React from 'react';

const Card = ({ name, price, addToCart }) => {
  return (
    <div className="card card-custom">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: {price}</p>
        <button type="button" className="btn btn-primary" onClick={addToCart}>
          Adicionar no carrinho
        </button>
      </div>
    </div>
  );
};

export default Card;
