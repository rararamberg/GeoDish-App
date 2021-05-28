import { Route, Switch, Redirect } from "react-router-dom";
import Dishes from "./screens/Dishes/Dishes";
import DishDetail from "./screens/DishDetail/DishDetail";
import AddDishes from "./screens/AddDishes/AddDishes";
import EditDish from "./screens/EditDish/EditDish";
import SignIn from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import { verifyUser } from "./services/users";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dishes user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/add-dishes">
          {/* <AddDishes user={user} /> */}
          {user ? <AddDishes user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/dishes/:id/edit">
          {/* <EditDish user={user} /> */}
          {user ? <EditDish user={user} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/dishes/:id">
          <DishDetail user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
