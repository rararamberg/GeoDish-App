import "./Filter.css";

// deconstruct all passed in props
const Filter = ({ dishes, setSearchResult, handleFilter, handleSubmit }) => {
  const filterDishes = (event) => {
    // pass the value of each button click through filter function
    handleFilter(event.target.value);
  };

  return (
    <form className="filter-container" onSubmit={(e) => handleSubmit(e)}>
      <div className="cuisine-links">
        <button value="french" onClick={filterDishes}>
          French
        </button>
        <button value="english" onClick={filterDishes}>
          English
        </button>
        <button value="italian" onClick={filterDishes}>
          Italian
        </button>
        <button value="american" onClick={filterDishes}>
          American
        </button>
        <button value="peruvian" onClick={filterDishes}>
          Peruvian
        </button>
        <button value="indian" onClick={filterDishes}>
          Indian
        </button>
        <button value="japanese" onClick={filterDishes}>
          Japanese
        </button>
      </div>
      <div className="meal-links">
        <button value="breakfast" onClick={filterDishes}>
          Breakfast
        </button>
        <button value="lunch" onClick={filterDishes}>
          Lunch
        </button>
        <button value="dinner" onClick={filterDishes}>
          Dinner
        </button>
        <button value="dessert" onClick={filterDishes}>
          Dessert
        </button>
      </div>
      <div className="all-btn-container">
        <button className="all-btn" onClick={() => setSearchResult(dishes)}>
          All Dishes
        </button>
      </div>
    </form>
  );
};

export default Filter;
