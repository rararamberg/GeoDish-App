import Layout from "../../components/Layout/Layout";
import Dish from "../../components/Dish/Dish";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";
import { useState, useEffect } from "react";
import { getDishes } from "../../services/dishes";
import "./Dishes.css";

const Dishes = (props) => {
  const [dishes, setDishes] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("name-ascending");

  useEffect(() => {
    const fetchDishes = async () => {
      const allDishes = await getDishes();
      setDishes(allDishes);
      setSearchResult(allDishes);
    };
    fetchDishes();
  }, []);

  const handleFilter = (type) => {
    console.log(type);
    const results = dishes.filter((dish) => dish.keywords.includes(type));
    if (!results.length) {
      console.log("sorry no dish found!");
      setSearchResult([]);
    } else {
      console.log(results);
      setSearchResult(results);
      setApplySort(true);
    }
  };

  const handleSearch = (event) => {
    const results = dishes.filter((dish) =>
      dish.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
    setApplySort(true);
  };

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }
    switch (type) {
      case "name-ascending":
        setSearchResult(AZ(searchResult));
        break;
      case "name-descending":
        setSearchResult(ZA(searchResult));
        break;
      case "price-ascending":
        setSearchResult(lowestFirst(searchResult));
        break;
      case "price-descending":
        setSearchResult(highestFirst(searchResult));
        break;
      default:
        break;
    }
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout user={props.user}>
      <main className="dishes-page-container">
        <div className="category-links-container">
          {/* filter category links go here*/}
          <Filter onSubmit={handleSubmit} handleFilter={handleFilter} />
        </div>
        <div className="search-sort-container">
          <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
          <Sort onSubmit={handleSubmit} handleSort={handleSort} />
        </div>
        <div className="dishes-cards-container">
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
