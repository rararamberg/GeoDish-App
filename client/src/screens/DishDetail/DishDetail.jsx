import Layout from "../../components/Layout/Layout";
import { getDish, deleteDish } from "../../services/dishes";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./DishDetail.css";

const DishDetail = (props) => {
  const [dish, setDish] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchDish = async () => {
      const dish = await getDish(id);
      console.log(dish);
      setDish(dish);
      setLoaded(true);
    };
    fetchDish();
  }, [id]);

  if (!isLoaded) {
    return <h1>Amazing food is on the way...</h1>;
  }

  return (
    <Layout user={props.user}>
      <main className="dish-detail-container">
        <div className="image-container">
          <img className="dish-image" src={dish.img_url} alt={dish.name} />
        </div>
        <div className="detail-container">
          <div className="details">
            <div className="details-name">{dish.name}</div>
            <div className="details-restaurant">{dish.restaurant}</div>
            <div className="details-location">{dish.location}</div>
            {/* <div className="restaurant-url">{dish.restaurant_url}</div> */}
            <div className="details-description">{dish.description}</div>
            <div className="details-price">${dish.price}.00</div>
            {/* <div className="keywords">{dish.keywords}</div> */}
          </div>
          <div className="button-container">
            <button className="edit-button">
              <Link
                className="edit-link-button"
                to={`/dishes/${dish._id}/edit`}
              >
                edit
              </Link>
            </button>
            <button
              className="delete-button"
              onClick={() => deleteDish(dish._id)}
            >
              delete
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default DishDetail;
