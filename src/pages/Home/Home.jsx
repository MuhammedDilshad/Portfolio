import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Tech from "../../components/Tech/Tech";
import Footer from "../../components/Footer/Footer";
import Skills from "../../components/Skills/Skills";
import About from "../../components/About/About";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      {/* <Tech /> */}
      <Skills />
      <Footer />
    </div>
  );
}

export default Home;
