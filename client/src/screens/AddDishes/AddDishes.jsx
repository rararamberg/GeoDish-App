import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createDish } from "../../services/dishes";

const AddDishes = (props) => {
  const [dish, setDish] = useState({
    name: "",
    description: "",
    img_url: "",
    price: "",
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
    return <Redirect to={`/`} />;
  }

  return (
    <Layout user={props.user}>
      <main className="add-dishes-container">
        form for adding Dishes
        <form className="create-form" onSubmit={handleSubmit}>
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
            className="input-price"
            placeholder="Price"
            value={dish.price}
            name="price"
            required
            onChange={handleChange}
          />
          <textarea
            className="textarea-description"
            rows={10}
            placeholder="Description"
            value={dish.description}
            name="description"
            required
            onChange={handleChange}
          />
          <input
            className="input-image-link"
            placeholder="Image Link"
            value={dish.img_url}
            name="imgURL"
            required
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </main>
    </Layout>
  );
};

export default AddDishes;
