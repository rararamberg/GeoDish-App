import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createDish } from "../../services/dishes";
import "./AddDishes.css";

const AddDishes = (props) => {
  const [dish, setDish] = useState({
    name: "",
    restaurant: "",
    description: "",
    img_url: "",
    restaurant_url: "",
    location: "",
    price: "",
    keyword: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDish({
      ...dish,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createDish(dish);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/dishes`} />;
  }

  return (
    <Layout user={props.user}>
      <main className="add-dishes-container">
        <div className="add-form-container">
          <div className="title-container">
            <h1>Add your dish here!</h1>
          </div>
          <form className="create-form" onSubmit={handleSubmit}>
            <label htmlFor="name" className="label-name">
              Name
            </label>
            <input
              className="input-name"
              placeholder="Name"
              value={dish.name}
              name="name"
              required
              autoFocus
              onChange={handleChange}
            />
            <label htmlFor="restaurant" className="label-restaurant">
              Restaurant Name
            </label>
            <input
              className="input-restaurant"
              placeholder="Restaurant"
              value={dish.restaurant}
              name="restaurant"
              required
              autoFocus
              onChange={handleChange}
            />
            <label htmlFor="">Region/genre</label>
            <input
              className="input-location"
              placeholder="Location"
              value={dish.location}
              name="location"
              required
              autoFocus
              onChange={handleChange}
            />
            <label htmlFor="">Price</label>
            <input
              className="input-price"
              placeholder="Price"
              value={dish.price}
              name="price"
              required
              onChange={handleChange}
            />
            <label htmlFor="">Dish Details</label>
            <textarea
              className="textarea-description"
              rows={10}
              placeholder="Description"
              value={dish.description}
              name="description"
              required
              onChange={handleChange}
            />
            <label htmlFor="">Image Link</label>
            <input
              className="input-image-link"
              placeholder="Image Link"
              value={dish.img_url}
              name="img_url"
              required
              onChange={handleChange}
            />
            <label htmlFor="">Restaurant Link</label>
            <input
              className="input-restaurant-link"
              placeholder="Restaurant Link"
              value={dish.restaurant_url}
              name="restaurant_url"
              required
              onChange={handleChange}
            />
            <label htmlFor="">Keywords</label>
            <input
              className="input-keyword"
              placeholder="Keywords"
              value={dish.keywords}
              name="keywords"
              required
              onChange={handleChange}
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default AddDishes;
