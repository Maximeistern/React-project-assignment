import { useEffect, useState } from "react";
import "./Footer.css";

const initialFormState = {
  name: "",
  likesChuckNorris: false,
  email: "",
};

function Footer() {
  const [formState, setFormState] = useState(initialFormState);
  const [checkBox, setCheckBox] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    window.localStorage.setItem("Myform", JSON.stringify(formState));
    setFormState(initialFormState);
  }

  function handleChange(e) {
    switch (e.target.name) {
      case "name":
        setFormState((prev) => ({ ...prev, name: e.target.value }));
        break;
      case "likesChuckNorris":
        setCheckBox((prev) => !prev);
        setFormState((prev) => ({
          ...prev,
          likesChuckNorris: e.target.checked,
        }));
        break;
      case "email":
        setFormState((prev) => ({
          ...prev,
          email: e.target.value,
        }));
        break;

      default:
        break;
    }
  }
  return (
    <div className="footer-div">
      <div>
        Please be a part of our comunity and register for our newsletter here to
        the right!
      </div>
      <div className="max-width">
        <form onSubmit={handleSubmit} className="max-width">
          <div className="form-div">
            <label htmlFor="likesChuckNorris">Do you like Chuck Norris? </label>
            <input
              type="checkbox"
              name="likesChuckNorris"
              checked={formState.likesChuckNorris}
              onChange={handleChange}
            />
          </div>
          {checkBox ? (
            <>
              <div className="form-div">
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-div">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </>
          ) : (
            <p>So you don't like Chuck Norris? What are you even doin' here?</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Footer;
