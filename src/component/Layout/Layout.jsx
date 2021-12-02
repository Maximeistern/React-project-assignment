import Footer from "../Footer";
import Topnav from "../Topnav";

export default function Layout({ children }) {
  return (
    <div>
      <Topnav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
