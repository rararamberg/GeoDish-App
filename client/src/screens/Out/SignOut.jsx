import { useEffect } from "react";
import { signOut } from "../../services/users";
import { useHistory } from "react-router-dom";

const SignOut = (props) => {
  // deconstruct props
  const { setUser } = props;
  // use Histroy to redirect user on site
  const history = useHistory();

  useEffect(() => {
    const signOutUser = async () => {
      await signOut();
      // set user to null when signing out
      setUser(null);
      // redirect user to home page after successful log out
      history.push("/");
    };
    signOutUser();
  }, [history, setUser]);

  return "";
};

export default SignOut;
