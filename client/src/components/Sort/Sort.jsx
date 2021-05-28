import "./Sort.css";

const Sort = (props) => {
  // function that takes event as argument and grab value of event (or select option) in drop down menu and passes that value into props handleSort function
  const handleSort = (event) => {
    props.handleSort(event.target.value);
  };

  return (
    <form className="sort-container" onSubmit={props.handleSubmit}>
      <label htmlFor="sort">SORT BY:</label>
      <select className="sort" onChange={handleSort}>
        <option className="option" value="name-ascending">
          &nbsp; Alphabetically, A-Z &nbsp;
        </option>
        <option value="name-descending">
          &nbsp; Alphabetically, Z-A &nbsp;
        </option>
        <option value="price-ascending">
          &nbsp; Price, low to high &nbsp;
        </option>
        <option value="price-descending">
          &nbsp; Price, high to low &nbsp;
        </option>
      </select>
    </form>
  );
};

export default Sort;
