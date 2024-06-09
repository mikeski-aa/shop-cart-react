import { ItemContext } from "../Shop";
import { useContext } from "react";

// function for rendering the individual item card

function ItemCard(props) {
  return (
    <div className="itemCard">
      <div className="imageContainer">
        <img src={props.image}></img>
      </div>
      <div className="itemNameAndPrice">
        <h3 className="itemName">{props.title}</h3>
        <h3 className="itemPrice">{props.price}</h3>
      </div>
      <div className="itemDescription">{props.description}</div>
      <div className="itemRating">{props.rating}</div>
      <button>Add to cart</button>
    </div>
  );
}

export { ItemCard };
