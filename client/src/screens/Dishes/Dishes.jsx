import Layout from "../../components/Layout/Layout";
import Dish from "../../components/Dish/Dish";
import { useState, useEffect } from "react";
import { getDishes } from "../../services/dishes";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      const allDishes = await getDishes();
      console.log(allDishes);
      setDishes(allDishes);
    };
    fetchDishes();
  }, []);

  return (
    <Layout>
      <main className="dishes-container">
        <span>Dish Page</span>
        <div>
          {dishes.map((dish) => (
            <Dish
              img_url={dish.img_url}
              name={dish.name}
              restaurant={dish.restaurant}
              price={dish.price}
              keywords={dish.keywords}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Dishes;
