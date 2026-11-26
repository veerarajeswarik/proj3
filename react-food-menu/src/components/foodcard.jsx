function FoodCard({
  name,
  category,
  description,
  price
}) {
  return (
    <div className="food-card">

      <div className="food-details">
        <p className="food-category">{category}</p>

        <h3>{name}</h3>

        <p className="description">
          {description}
        </p>
      </div>

      <div className="food-price">
        ₹{price}
      </div>

    </div>
  );
}

export default FoodCard;