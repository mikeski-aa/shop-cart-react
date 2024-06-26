import "../styles/ItemCard.css";
import { useContext, useState } from "react";
import { ItemContext } from "../Shop";
import star from "../assets/star-full.svg";

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

// function to add item to cart if it does not exist
function addNewItemToCart(itemContext, id) {
  console.log(itemContext.cart);
  let tempArray = [...itemContext.items];
  let itemClicked = tempArray.filter((item) => item.id == id)[0];
  itemClicked = { ...itemClicked, itemQuantity: 1 };
  itemContext.setNewCart([...itemContext.cart, itemClicked]);
}

// function for changing item quantity value if item is already in the cart
function incrementAmountInCart(itemContext, id) {
  let tempArray = [...itemContext.cart];

  for (let x = 0; x < tempArray.length; x++) {
    if (tempArray[x].id === id) {
      let tempValue = tempArray[x].itemQuantity;
      tempValue += 1;
      tempArray[x] = { ...tempArray[x], itemQuantity: tempValue };
    }
  }

  itemContext.setNewCart(tempArray);
}

// function for rendering the individual item card

function ItemCard(props) {
  const itemContext = useContext(ItemContext);
  const [descState, setDescState] = useState("hide");

  const handleAddToCart = () => {
    if (checkIfItemExists(props.id, itemContext.cart) === false) {
      addNewItemToCart(itemContext, props.id);
    } else {
      incrementAmountInCart(itemContext, props.id);
    }

    console.log(itemContext.cart);
  };

  const mouseEnterEvent = () => {
    // console.log("hover enter");
    // setDescState("show");
  };

  const mouseLeaveEvent = () => {
    // console.log("hover hoverexit");
    // setDescState("hide");
  };

  return (
    <div
      className={`itemCard ${descState}`}
      onMouseEnter={mouseEnterEvent}
      onMouseLeave={mouseLeaveEvent}
    >
      <div className="imageContainer">
        <img className="itemImage" src={props.image}></img>
      </div>
      <div className="itemNameAndPrice">
        <h3 className="itemName">{props.title}</h3>
        <hr />
        <h3 className="itemPrice">€ {props.price}</h3>
      </div>
      <div className={`itemDescription ${descState}`}>{props.description}</div>
      <div className="ratingAndButton">
        <div className="itemRating">
          {props.rating} <img src={star} className="starImage"></img>
        </div>
        <button onClick={handleAddToCart} className="addToCartBtn">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export { ItemCard, checkIfItemExists };
