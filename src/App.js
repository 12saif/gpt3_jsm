import React from "react";
import "./App.css";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";

import Footer from "./containers/footer/Footer";
import Blog from "./containers/blog/Blog";
import Possibility from "./containers/possibility/Possibility";
import Feature from "./components/feature/Feature";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import Header from "./containers/header/Header";
// import {
  //   Footer,
  //   Blog,
  //   Possibility,
  //   Feature,
  //   WhatGPT3,
  //   Header,
  // } from "./containers";
  import { CTA, Brand, Navbar } from "./components";
  

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
