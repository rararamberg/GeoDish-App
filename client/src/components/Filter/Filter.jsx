import { Link } from "react-router-dom";
import "./Filter.css";

const Filter = (props) => {
  const handleFilter = (event) => {
    console.log(event.target.value);
    props.handleFilter(event.target.value);
  };

  return (
    <form className="filter-container" onSubmit={(e) => props.onSubmit(e)}>
      <div className="cuisine-links">
        <button value="french" onClick={handleFilter}>
          French
        </button>
        <Link value="italian" onClick={handleFilter}>
          Italian
        </Link>
        <Link value="american">American</Link>
        <Link value="indian">Indian</Link>
        <Link value="japanese">Japanese</Link>
        <Link value="peruvian">Peruvian</Link>
      </div>
      <div className="meal-links">
        <Link value="breakfast">Breakfast</Link>
        <Link value="lunch">Lunch</Link>
        <Link value="dinner">Dinner</Link>
        <Link value="dessert">Dessert</Link>
      </div>
    </form>
  );
};

export default Filter;
