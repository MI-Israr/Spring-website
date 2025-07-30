import "./App.css";
import Nav from "./components/NavBar/Nav.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import LogoBar from "./components/LogoBar/LogoBar.jsx";

function App() {
  return (
    <div className="app">
      <Nav />
      <HeroSection />
      <LogoBar />
    </div>
  );
}

export default App;
