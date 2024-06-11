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

// function to add item to cart if it does not exist
function addNewItemToCart(itemContext, id) {
  console.log(itemContext.cart);
  let tempArray = [...itemContext.items];
  let itemClicked = tempArray.filter((item) => item.id == id)[0];
  itemClicked = { ...itemClicked, itemQuanitity: 0 };
  itemContext.setNewCart([...itemContext.cart, itemClicked]);
}

// function for changing item quantity value if item is already in the cart
function incrementAmountInCart(itemContext, id) {
  let tempArray = [...itemContext.cart];

  for (let x = 0; x < tempArray.length; x++) {
    if (tempArray[x].id === id) {
      let tempValue = tempArray[x].itemQuanitity;
      tempValue += 1;
      tempArray[x] = { ...tempArray[x], itemQuanitity: tempValue };
    }
  }

  itemContext.setNewCart(tempArray);
}

// function for rendering the individual item card

function ItemCard(props) {
  const itemContext = useContext(ItemContext);

  const handleAddToCart = () => {
    // need to set state / add this to cart state

    // if (checkIfItemExists(props.id, itemContext.cart) === true) {
    //   filteredItem.itemQuantity;
    //   console.log(filteredItem.itemQuantity);
    //   for (let x = 0; x < tempArray.length; x++) {
    //     if (tempArray[x].id === props.id) {
    //       tempArray[x] = { ...tempArray[x], itemQuantity: 1 };
    //     }
    //   }
    //   itemContext.setNewCart(tempArray);

    //   console.log(filteredItem);
    // } else {
    //   filteredItem = { ...filteredItem, itemQuantity: 0 };
    //   itemContext.setNewCart([...itemContext.cart, filteredItem]);
    // }

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

export { ItemCard, checkIfItemExists };
