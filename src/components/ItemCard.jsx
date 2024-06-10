import "../styles/ItemCard.css";
import { useContext } from "react";
import { ItemContext } from "../Shop";

// helper function for finding whether the item already exists in the array
function checkIfItemExists(itemId, arrayToSearch) {
  let tempArray = [...arrayToSearch];
  let filteredArr = tempArray.filter((item) => item.id === itemId);

  if (filteredArr.length > 0) {
    console.log("Item present, already added");
    return true;
  } else {
    console.log("Item not present");
    return false;
  }
}
// function for rendering the individual item card

function ItemCard(props) {
  const itemContext = useContext(ItemContext);

  const handleAddToCart = () => {
    // need to set state / add this to cart state
    let tempArray = [...itemContext.items];
    let filteredItem = tempArray.filter((item) => item.id == props.id)[0];
    filteredItem = { ...filteredItem, itemQuantity: 0 };

    checkIfItemExists(props.id, itemContext.cart);

    itemContext.setNewCart([...itemContext.cart, filteredItem]);

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
