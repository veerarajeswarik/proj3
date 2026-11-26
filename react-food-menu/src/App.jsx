import { useState } from "react";

import Header from "./components/header";
import Banner from "./components/banner";
import CategoryButton from "./components/categorybutton";
import MenuList from "./components/menulist";
import Footer from "./components/footer";

import "./App.css";

function App() {

  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Starters",
    "Main Course",
    "Desserts",
    "Beverages"
  ];

  return (
    <>
      <Header />

      <Banner />

      <section className="menu" id="menu">

        <h2>Our Menu</h2>

        <p className="menu-subtitle">
          Choose your favourite food category.
        </p>

        <div className="category-container">

          {categories.map((item) => (
            <CategoryButton
              key={item}
              name={item}
              selectedCategory={category}
              setCategory={setCategory}
            />
          ))}

        </div>

        <MenuList category={category} />

      </section>

      <Footer />
    </>
  );
}

export default App;