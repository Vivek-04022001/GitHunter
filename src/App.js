import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [btnText, setBtnText] = useState("light");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setBtnText(btnText == "light" ? "dark" : "light");
  };
  return (
    <GithubProvider>
      <AlertProvider>
        <button onClick={toggleDarkMode} className={`toggle-btn ${isDarkMode && "btn-light"} `}>
          {btnText}
        </button>
        <Router>
          <div className={`flex flex-col justify-between h-screen ${isDarkMode && "light"}`}>

            <Navbar isDarkMode={isDarkMode} />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/NotFound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer isDarkMode={isDarkMode} />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
