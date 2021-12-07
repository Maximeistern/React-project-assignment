import "./App.css";
import { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./component/Layout/Layout";
import Login from "./pages/Login";
import JokePage from "./pages/JokePage";

export const LoggedIn = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <LoggedIn.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Jokes" element={<JokePage />} />
          </Routes>
        </Layout>
      </LoggedIn.Provider>
    </div>
  );
}

export default App;
