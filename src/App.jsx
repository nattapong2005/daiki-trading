import React from "react";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";
import Hero from "./section/Hero";
import About from "./section/About";
import Footer from "./components/Footer";
import Service from "./section/Service";
import Vision from "./section/Vision";
import Stat from "./section/Stat";
import Testimonial from "./section/Testimonial";
import Contact from "./section/Contact";
import Apply from "./section/Apply";
import Test from "./section/Test";
import Intergration from "./section/Intergration";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Daiki Trading | Fulfillment คลังสินค้า</title>
        <meta name="description" content="บริการ Fulfillment ครบวงจร จัดเก็บ แพ็ค ส่ง ติดตาม ครบจบในที่เดียว" />
        <meta name="keywords" content="Fulfillment, คลังสินค้า, ขนส่ง, E-commerce" />
      </Helmet>

      <Navbar />
      <Hero />
      <About />
      <Service />
      <Vision />
      <Stat />
      <Testimonial />
      <Intergration/>
      <Apply />
      <Contact />
      <Test />
      <Footer />
    </>
  );
};

export default App;
