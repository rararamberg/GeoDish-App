import Layout from "../../components/Layout/Layout";
import { getDish, deleteDish } from "../../services/dishes";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DishDetail = (props) => {
  const [dish, setDish] = useState({});
  // const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchDish = async () => {
      const dish = await getDish(id);
      setDish(dish);
      // setLoaded(true);
    };
    fetchDish();
  }, [id]);

  // if (!isLoaded) {
  //   return <h1>Amazing food is on the way...</h1>;
  // }

  return (
    <Layout>
      <main className="dish-detail-container">
        <img className="dish-detail-image" src={dish.img_url} alt={dish.name} />
        <div className="detail">
          <div className="name">name{dish.name}</div>
          <div className="restaurant">restaurant{dish.restaurant}</div>
          <div className="restaurant-url">
            restaurant url {dish.restaurant_url}
          </div>
          <div className="price">price{dish.price}</div>
          <div className="description">description{dish.description}</div>
          <div className="keywords">keywords{dish.keywords}</div>
          <div className="button-container">
            <button>
              <Link className="edit-button" to={`/dishes/${dish._id}/edit`}>
                Edit
              </Link>
            </button>
            <button
              className="delete-button"
              onClick={() => deleteDish(dish._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default DishDetail;
