import Footer from "../Footer";
import Topnav from "../Topnav";
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
