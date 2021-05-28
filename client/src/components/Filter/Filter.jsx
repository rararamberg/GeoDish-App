import { Link } from "react-router-dom";

const Filter = (props) => {
  return (
    <div className="filter-container">
      filter feature here
      <div className="cuisine-links">
        <Link>French</Link>
        <Link>Italian</Link>
        <Link>American</Link>
        <Link>Indian</Link>
        <Link>Japanese</Link>
        <Link>Peruvian</Link>
      </div>
      <div className="meal-links">
        <Link>Breakfast</Link>
        <Link>Lunch</Link>
        <Link>Dinner</Link>
        <Link>Dessert</Link>
      </div>
    </div>
  );
};

export default Filter;
