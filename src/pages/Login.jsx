import { useContext } from "react";
import { LoggedIn } from "../App";
import { Link } from "react-router-dom";
import "./Login.css";

export default function SignIn() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoggedIn);
  return (
    <div className="login-Div">
      <h1>Välkommen till oss</h1>
      <p>Logga in eller Logga ut med knappen</p>
      <Link to="/">
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="login-button"
        >
          Logga in / Logga ut
        </button>
      </Link>
    </div>
  );
}
