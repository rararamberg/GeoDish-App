import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams, Redirect } from "react-router-dom";
import { getDish, updateDish } from "../../services/dishes";

const EditDish = (props) => {
  const [dish, setDish] = useState({
    name: "",
    restaurant: "",
    img_url: "",
    restaurant_url: "",
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
              src={dish.imgURL}
              alt={dish.name}
            />
            <form onSubmit={handleSubmit}>
              <input
                className="edit-input-image-link"
                placeholder="Image Link"
                value={dish.imgURL}
                name="imgURL"
                required
                onChange={handleChange}
              />
            </form>
          </div>
          <form className="edit-form" onSubmit={handleSubmit}>
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
              cols={78}
              placeholder="Description"
              value={dish.description}
              name="description"
              required
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
