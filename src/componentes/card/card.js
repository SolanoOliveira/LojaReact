import './card.css'
const Card = ({ name, price }) => {
  return (
    <div className="card card-custom">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: {price}</p>
      </div>
    </div>
  );
};

export default Card;
