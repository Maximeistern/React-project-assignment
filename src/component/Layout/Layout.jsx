import Footer from "../sections/Footer";
import Topnav from "../sections/Topnav";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout-div">
      <Topnav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
