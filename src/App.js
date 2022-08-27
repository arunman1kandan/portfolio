import './App.css';
import Experience from './Components/Experience/Experience';
import Intro from './Components/InfoSection/Intro';
import { Navbar } from './Components/Navbar/Navbar';
import Work from './Components/Works/Works';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import {themeContext} from "./ThemeChanger"
import {useContext} from "react"

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode? "#121212" : "",
      color : darkMode? "white" : "",

    }}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
