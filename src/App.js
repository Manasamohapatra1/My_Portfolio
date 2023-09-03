import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Projects from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skill />
      <SocialLinks />
    </div>
  );
}

export default App;
