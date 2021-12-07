import { useContext } from "react";
import { LoggedIn } from "../App";
import "./InfoSection.css";

export default function InfoSection() {
  const { isLoggedIn } = useContext(LoggedIn);
  return (
    <section className="info-Div">
      {isLoggedIn ? (
        <div className="info-login-div">
          <h1>Thank you!</h1>
          <h2>For Being A Member</h2>
          <p>
            Our Website Is All About Our Lord And Saviour Chuck Norris! <br />
            Spread The Word To All Of Your Friends!
          </p>
        </div>
      ) : (
        <p>Log in if you want to se more!</p>
      )}
    </section>
  );
}
