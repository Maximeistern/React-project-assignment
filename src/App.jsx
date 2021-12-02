import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./component/Layout/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
