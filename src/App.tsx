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

function App() {
  return (
    <div className="App">
        <Menu/>
        <Home/>
        <Blank marginTopValue={130}/>
        <ActualLearnings />
        <Blank marginTopValue={80}/>
        <Skills />
        <Blank marginTopValue={80}/>
        <OtherSkills />
        <Blank marginTopValue={80}/>
        <Projects />
        <Blank marginTopValue={80}/>
        <Languages />
    </div>
  );
}

export default App;
