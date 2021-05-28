import { Link } from "react-router-dom";

const Dish = (props) => {
  return (
    <div>
      <Link className="dish" to={`/dishes/${props._id}`}>
        <img className="dish-image" src={props.img_url} alt={props.name} />
        <div className="dish-name">{props.name}</div>
        <div className="dish-restaurant-name">{props.restaurant}</div>
        <div className="dish-price">{props.price}</div>
        <div className="dish-keywords">{props.keywords}</div>
      </Link>
    </div>
  );
};

export default Dish;
