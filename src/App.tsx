import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import Home from "./components/Pages/Home/Home";
import ActualLearnings from "./components/Pages/ActualLearnings/ActualLearnings";
import Blank from "./components/Blank/Blank";
import Skills from "./components/Pages/Skills/Skills";
import OtherSkills from "./components/Pages/OtherSkills/OtherSkills";
import Projects from "./components/Pages/Projects/Projects";
import Languages from "./components/Pages/Languages/Languages";
import Results from "./components/Pages/Results/Results";
import AboutMe from "./components/Pages/AboutMe/AboutMe";
import Footer from "./components/Pages/Footer/Footer";

function App() {
      return (
      <div className="App">
            <Menu/>
            <Home/>
            <Blank marginTopValue={130}/>
            <ActualLearnings />
            <Blank marginTopValue={100}/>
            <Skills />
            <Blank marginTopValue={100}/>
            <OtherSkills />
            <Blank marginTopValue={100}/>
            <Projects />
            <Blank marginTopValue={100}/>
            <Languages />
            <Blank marginTopValue={100}/>
            <Results />
            <Blank marginTopValue={100}/>
            <AboutMe />
            <Footer />
      </div>
      );
}

export default App;
