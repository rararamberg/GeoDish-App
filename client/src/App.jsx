import { Route, Switch, Redirect } from "react-router-dom";
import Dishes from "./screens/Dishes/Dishes";
import DishDetail from "./screens/DishDetail/DishDetail";
import AddDishes from "./screens/AddDishes/AddDishes";
import EditDish from "./screens/EditDish/EditDish";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dishes />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/products">
          <EditDish />
        </Route>
        <Route path="/add-dishes">
          <AddDishes />
        </Route>
        <Route exact path="/dishes/:id/edit">
          <EditDish />
        </Route>
        <Route exact path="/dishes/:id">
          <DishDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
