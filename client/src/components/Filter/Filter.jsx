import { Link } from "react-router-dom";
import "./Filter.css";

const Filter = (props) => {
  const handleFilter = (event) => {
    props.handleFilter(event.target.value);
  };

  return (
    <form className="filter-container" onSubmit={(e) => props.onSubmit(e)}>
      <div className="cuisine-links">
        <button value="french" onClick={handleFilter}>
          French
        </button>
        <button value="italian" onClick={handleFilter}>
          Italian
        </button>
        <button value="american" onClick={handleFilter}>
          American
        </button>
        <button value="indian" onClick={handleFilter}>
          Indian
        </button>
        <button value="japanese" onClick={handleFilter}>
          Japanese
        </button>
        <button value="peruvian" onClick={handleFilter}>
          Peruvian
        </button>
      </div>
      <div className="meal-links">
        <button value="breakfast" onClick={handleFilter}>
          Breakfast
        </button>
        <button value="lunch" onClick={handleFilter}>
          Lunch
        </button>
        <button value="dinner" onClick={handleFilter}>
          Dinner
        </button>
        <button value="dessert" onClick={handleFilter}>
          Dessert
        </button>
      </div>
    </form>
  );
};

export default Filter;
