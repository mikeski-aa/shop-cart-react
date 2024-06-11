import "../styles/CartItem.css";

// function for rendering individual card items for the cart part of the store

function CartItem(props) {
  return (
    <div className="cartItem">
      <div className="cartImageDiv">
        <img className="cartImage" src={props.url}></img>
      </div>
      <div className="itemName">{props.name}</div>
      <div className="itemSubtotal">EUR 0</div>
      <div className="quantityChange">
        <button>-</button>
        <input type="number" value={props.quantity}></input>
        <button>+</button>
      </div>
    </div>
  );
}

export { CartItem };
