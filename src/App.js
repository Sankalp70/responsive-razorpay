import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import Section from "./components/Section/Section";
import Scroller from "./components/Scroller/Scroller";
import Features from "./components/Features/Features";
import Responsive from "./components/Responsive/Responsive";
import Grid from "./Grid/Grid";
import Nav from "./components/MobileNavbar/Nav";
import Signup from "./components/Signup/Signup";
import Component from "./components/Component/Component";

const App = () => {
  return (
    <div>
       {/* <Navbar />  
      <Main />
      <Carousel />
      <Features />
      
      <Section />
      <Scroller />
       <Footer /> */}


       {/******* * Responsive Code ****/}
        <Nav/> 

        <Signup/> 
        <Grid/> 
        <Component/>
       <Footer/>
    
      
    </div>
  );
};

export default App;
