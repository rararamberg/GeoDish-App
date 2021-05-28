import Layout from "../../components/Layout/Layout";
import Dish from "../../components/Dish/Dish";
import Search from "../../components/Search/Search";
import { useState, useEffect } from "react";
import { getDishes } from "../../services/dishes";

const Dishes = (props) => {
  const [dishes, setDishes] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      const allDishes = await getDishes();
      setDishes(allDishes);
      setSearchResult(allDishes);
    };
    fetchDishes();
  }, []);

  const handleSearch = (event) => {
    const results = dishes.filter((dish) =>
      dish.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
    // setApplySort(true);
  };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <main className="dishes-container">
        <span>Dish Page</span>
        <div>
          {searchResult.map((dish) => (
            <Dish
              _id={dish._id}
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
