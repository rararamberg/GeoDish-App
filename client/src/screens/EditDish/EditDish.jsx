import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams, Redirect } from "react-router-dom";
import { getDish, updateDish } from "../../services/dishes";
import "./EditDish.css";

const EditDish = (props) => {
  const [dish, setDish] = useState({
    name: "",
    restaurant: "",
    img_url: "",
    restaurant_url: "",
    location: "",
    description: "",
    price: "",
    keywords: [],
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchDish = async () => {
      const dish = await getDish(id);
      setDish(dish);
    };
    fetchDish();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDish({
      ...dish,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateDish(id, dish);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/dishes/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <main className="edit-dish-container">
        <div className="dish-edit">
          <div className="image-container">
            <img
              className="edit-dish-image"
              src={dish.img_url}
              alt={dish.name}
            />
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <input
                className="input-name"
                placeholder="Name"
                value={dish.name}
                name="name"
                required
                autoFocus
                onChange={handleChange}
              />
              <input
                className="input-restaurant"
                placeholder="Restaurant"
                value={dish.restaurant}
                name="restaurant"
                required
                autoFocus
                onChange={handleChange}
              />
              <input
                className="input-restaurant_url"
                placeholder="Retaurant_url"
                value={dish.restaurant_url}
                name="restaurant_url"
                required
                autoFocus
                onChange={handleChange}
              />
              <input
                className="input-location"
                placeholder="Location"
                value={dish.location}
                name="location"
                required
                autoFocus
                onChange={handleChange}
              />
              <textarea
                className="textarea-description"
                rows={10}
                cols={78}
                placeholder="Description"
                value={dish.description}
                name="description"
                required
                onChange={handleChange}
              />
              <input
                className="edit-input-image-link"
                placeholder="Image Link"
                value={dish.img_url}
                name="img_url"
                required
                onChange={handleChange}
              />
              <input
                className="input-price"
                placeholder="Price"
                value={dish.price}
                name="price"
                required
                onChange={handleChange}
              />
              <input
                className="input-keywords"
                placeholder="Keywords"
                value={dish.keywords}
                name="keywords"
                required
                autoFocus
                onChange={handleChange}
              />

              <button type="submit" className="save-button">
                Save
              </button>
            </form>
          </div>
          <form onSubmit={handleSubmit} className="form-container">
            <input
              className="input-name"
              placeholder="Name"
              value={dish.name}
              name="name"
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className="input-restaurant"
              placeholder="Restaurant"
              value={dish.restaurant}
              name="restaurant"
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className="input-restaurant_url"
              placeholder="Retaurant_url"
              value={dish.restaurant_url}
              name="restaurant_url"
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className="input-location"
              placeholder="Location"
              value={dish.location}
              name="location"
              required
              autoFocus
              onChange={handleChange}
            />
            <textarea
              className="textarea-description"
              rows={10}
              cols={78}
              placeholder="Description"
              value={dish.description}
              name="description"
              required
              onChange={handleChange}
            />
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={dish.img_url}
              name="img_url"
              required
              onChange={handleChange}
            />
            <input
              className="input-price"
              placeholder="Price"
              value={dish.price}
              name="price"
              required
              onChange={handleChange}
            />
            <input
              className="input-keywords"
              placeholder="Keywords"
              value={dish.keywords}
              name="keywords"
              required
              autoFocus
              onChange={handleChange}
            />

            <button type="submit" className="save-button">
              Save
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default EditDish;
