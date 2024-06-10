import { ItemContext } from "../Shop";
import { useContext } from "react";
import "../styles/ItemCard.css";

// function for rendering the individual item card

function ItemCard(props) {
  const handleAddToCart = () => {
    console.log(props.id);
    return props.id;
  };

  return (
    <div className="itemCard">
      <div className="imageContainer">
        <img className="itemImage" src={props.image}></img>
      </div>
      <div className="itemNameAndPrice">
        <h3 className="itemName">{props.title}</h3>
        <h3 className="itemPrice">€ {props.price}</h3>
      </div>
      <div className="itemDescription">{props.description}</div>
      <div className="itemRating">{props.rating}</div>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

export { ItemCard };
