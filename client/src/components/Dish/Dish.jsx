import { Link } from "react-router-dom";
import "./Dish.css";

const Dish = (props) => {
  return (
    <div className="dish-card">
      <Link className="dish" to={`/dishes/${props._id}`}>
        {/* <img className="dish-image" src={props.img_url} alt={props.name} /> */}
        <div
          className="dish-image"
          style={{
            backgroundImage: `url(${props.img_url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "350px",
            height: "400px",
          }}
        >
          {/* background image displayed here */}
        </div>
        <div className="dish-minor-info">
          <div className="dish-price">$ {props.price}</div>
          <div className="dish-name">{props.name}</div>
          <div className="dish-restaurant-name">{props.restaurant}</div>
          <div className="dish-keywords">{props.keywords}</div>
        </div>
      </Link>
    </div>
  );
};

export default Dish;
