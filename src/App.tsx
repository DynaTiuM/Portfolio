import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import Home from "./components/Pages/Home/Home";
import ActualLearnings from "./components/Pages/ActualLearnings/ActualLearnings";
import Blank from "./components/Blank/Blank";
import Skills from "./components/Pages/Skills/Skills";

function App() {
  return (
    <div className="App">
        <Menu/>
        <Home/>
        <Blank marginTopValue={130}/>
        <ActualLearnings />
        <Blank marginTopValue={80}/>
        <Skills />
    </div>
  );
}

export default App;
