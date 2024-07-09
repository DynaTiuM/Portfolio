import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import ActualLearnings from "./pages/ActualLearnings/ActualLearnings";
import Blank from "./components/Blank/Blank";
import Skills from "./pages/Skills/Skills";
import OtherSkills from "./pages/OtherSkills/OtherSkills";
import Projects from "./pages/Projects/Projects";
import Languages from "./pages/Languages/Languages";
import Results from "./pages/Results/Results";
import AboutMe from "./pages/AboutMe/AboutMe";
import Footer from "./pages/Footer/Footer";
import Contact from "./pages/Contact/Contact";

function App() {
      return (
          <div className="App">
                <Menu />
                <div id="home"><Home /></div>
                <Blank marginTopValue={130} />
                <div id="actualLearnings"><ActualLearnings /></div>
                <Blank marginTopValue={100} />
                <div id="skills"><Skills /></div>
                <Blank marginTopValue={100} />
                <div id="otherSkills"><OtherSkills /></div>
                <Blank marginTopValue={100} />
                <div id="projects"><Projects /></div>
                <Blank marginTopValue={100} />
                <div id="languages"><Languages /></div>
                <Blank marginTopValue={100} />
                <div id="results"><Results /></div>
                <Blank marginTopValue={100} />
                <div id="aboutMe"><AboutMe /></div>
                <Blank marginTopValue={100} />
                <div id="contact"><Contact /></div>
                <Footer />
          </div>
      );
}

export default App;
