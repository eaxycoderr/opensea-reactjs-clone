import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/login/Login";
import Assets from "./pages/assets/Assets";
import Solana from "./pages/solana-collections/Solana";
import Art from "./pages/categories/Art";
import Collectibles from "./pages/categories/Collectibles";
import DomainNames from "./pages/categories/DomainNames";
import Music from "./pages/categories/Music";

export const ThemeContext = createContext(null);

function App(props) {
  const [theme, setTheme] = useState("dark");

  const storedMode = localStorage.getItem("theme");
  if (storedMode == null) {
    localStorage.setItem("theme", "light");
  }
  useEffect(() => {
    setTheme(storedMode);
  }, [storedMode]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    if (storedMode === "light" || storedMode === null) {
      localStorage.removeItem("theme");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.removeItem("theme");
      localStorage.setItem("theme", "light");
      setTheme("Light");
    }
  };
  let location = useLocation();
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      <div className="App" id={theme}>
        <Header toggleTheme={toggleTheme}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/solana-collections" element={<Solana />} />
          <Route path="/category/art" element={<Art />} />
          <Route path="/category/collectibles" element={<Collectibles />} />
          <Route path="/category/domain-names" element={<DomainNames />} />
          <Route path="/category/music" element={<Music />} />
        </Routes>
        {location.pathname !== '/assets' && 
        location.pathname !== '/solana-collections' &&
        location.pathname !== '/category/art' &&
        location.pathname !== '/category/collectibles' &&
        location.pathname !== '/category/domain-names' &&
        location.pathname !== '/category/music' &&
        <Footer />}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
