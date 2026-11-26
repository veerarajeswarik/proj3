function CategoryButton({
  name,
  selectedCategory,
  setCategory
}) {
  return (
    <button
      className={
        selectedCategory === name
          ? "category-btn active"
          : "category-btn"
      }
      onClick={() => setCategory(name)}
    >
      {name}
    </button>
  );
}

export default CategoryButton;