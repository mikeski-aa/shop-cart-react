import "../styles/ItemCard.css";
import { useContext } from "react";
import { ItemContext } from "../Shop";

// function for rendering the individual item card

function ItemCard(props) {
  const itemContext = useContext(ItemContext);

  const handleAddToCart = () => {
    console.log(props.id);
    // need to set state / add this to cart state
    let tempArray = [...itemContext.items];
    let filteredArray = tempArray.filter((item) => item.id == props.id)[0];
    filteredArray = { ...filteredArray, inBasked: true };

    itemContext.setNewCart([...itemContext.cart, filteredArray]);
    console.log(itemContext.cart);
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
