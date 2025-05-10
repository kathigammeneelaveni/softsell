import React from "react";
import NavbarComponent from "./components/Navbar";
import Hero from "./pages/Hero";
import HowItWorks from "./pages/HowItWorks";
import WhyChooseUs from "./pages/WhyChooseUs";
import Testimonials from "./pages/Testimonials";
import ContactForm from "./pages/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarComponent />
      <main style={{ marginTop: "80px" }}>
        <section id="hero"><Hero /></section>
        <section id="how-it-works"><HowItWorks /></section>
        <section id="why-choose-us"><WhyChooseUs /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><ContactForm /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
