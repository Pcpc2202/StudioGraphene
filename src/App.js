import "./App.css";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Navbar from "./Components/NavBar";
import Comunity from "./Components/OurComunity";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Comunity />
      <Menu />
    </div>
  );
}

export default App;
