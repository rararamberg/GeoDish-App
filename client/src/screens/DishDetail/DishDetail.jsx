import Layout from "../../components/Layout/Layout";
import { getDish, deleteDish } from "../../services/dishes";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DishDetail = () => {
  const [dish, setDish] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  return (
    <Layout>
      <main className="dish-detail-container">
        <img className="dish-detail-image" src={dish.imgURL} alt={dish.name} />
        <div className="detail">
          <div className="name">{dish.name}</div>
          <div className="price">{`$${dish.price}`}</div>
          <div className="description">{dish.description}</div>
          <div className="button-container">
            <Link className="edit-button" to={`/dishes/${dish._id}/edit`}>
              Edit
            </Link>
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
