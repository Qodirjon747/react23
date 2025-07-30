import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <img
        src={props.mahsulot.img[0]}
        alt=""
      />
      <h3>{props.mahsulot.name}</h3>
      <h2>Price: {props.mahsulot.price}$</h2>
    </div>
  );
}

export default Card;
