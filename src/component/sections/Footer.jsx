import "./Footer.css";
import Form from "./Form";

function Footer() {
  return (
    <footer className="footer-div">
      <div className="footer-text">
        <p>
          Please be a part of our comunity and register for our newsletter here
          to the right!
        </p>
      </div>
      <div className="max-width">
        <Form />
      </div>
    </footer>
  );
}

export default Footer;
