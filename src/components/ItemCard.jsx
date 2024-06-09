// function for rendering the individual item card

function ItemCard() {
  return (
    <div className="itemCard">
      <div className="imageContainer">
        <img></img>
      </div>
      <div className="itemNameAndPrice">
        <h3 className="itemName"></h3>
        <h3 className="itemPrice"></h3>
      </div>
      <div className="itemDescription"></div>
      <div className="itemRating"></div>
      <button>Add to cart</button>
    </div>
  );
}

export { ItemCard };
