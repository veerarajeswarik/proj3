import FoodCard from "./foodcard";

const foods = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Main Course",
    description: "Classic pizza with cheese and tomato sauce.",
    price: 249
  },
  {
    id: 2,
    name: "Veg Burger",
    category: "Main Course",
    description: "Fresh vegetables with a crispy patty.",
    price: 129
  },
  {
    id: 3,
    name: "French Fries",
    category: "Starters",
    description: "Crispy golden potato fries.",
    price: 99
  },
  {
    id: 4,
    name: "Paneer Tikka",
    category: "Starters",
    description: "Grilled paneer with Indian spices.",
    price: 179
  },
  {
    id: 5,
    name: "Chocolate Brownie",
    category: "Desserts",
    description: "Rich and delicious chocolate brownie.",
    price: 149
  },
  {
    id: 6,
    name: "Vanilla Ice Cream",
    category: "Desserts",
    description: "Creamy vanilla ice cream.",
    price: 89
  },
  {
    id: 7,
    name: "Cold Coffee",
    category: "Beverages",
    description: "Chilled coffee with milk.",
    price: 119
  },
  {
    id: 8,
    name: "Fresh Lime Juice",
    category: "Beverages",
    description: "Refreshing freshly squeezed lime juice.",
    price: 69
  }
];

function MenuList({ category }) {

  const filteredFoods =
    category === "All"
      ? foods
      : foods.filter(
          (food) => food.category === category
        );

  return (
    <div className="menu-list">

      {filteredFoods.map((food) => (
        <FoodCard
          key={food.id}
          name={food.name}
          category={food.category}
          description={food.description}
          price={food.price}
        />
      ))}

    </div>
  );
}

export default MenuList;