import React, { useState } from "react";
import "./Testimonials.css";
import justin from "./images/justin-modrak.webp";
import Dalibor from "./images/dalibor-kruljac.webp";
import chris from "./images/chris-robinson.webp";
import Gorillas from "./images/gorillas.svg";
import Wolt from "./images/wolt.svg";
import Marriott from "./images/marriott-intl.svg";
import Merck from "./images/merck.svg";
import Costco from "./images/costco.svg";
import SAIC from "./images/saic.svg";
import Hilton from "./images/hilton.svg";
// import Gorillas from "./images/gorillas.svg";

function Testimonials() {
  const testimonials = [
    {
      quote: "Hexnode is of great value. Works great with Android and iOS!",
      name: "Justin Modrak",
      position: "Technology Coordinator",
      company: "East Troy Community School District",
      image: justin,
    },
    {
      quote:
        "Most complete MDM solution I found, and I tested many of them, including major names",
      name: "Dalibor Kurljac",
      position: "",
      company: "KAMELEYA LTD",
      image: Dalibor,
    },
    {
      quote: "It seemed to be in-line with everything we were looking at.",
      name: "Chris Robinson",
      position: "Executive Account Manager",
      company: "",
      image: chris,
    },
  ];

  const logos = [
    { src: Gorillas, alt: "Gorillas" },
    { src: Wolt, alt: "Wolt" },
    { src: Marriott, alt: "Marriott" },
    { src: Merck, alt: "Merck" },
    { src: Costco, alt: "Costco" },
    { src: SAIC, alt: "SAIC" },
    { src: Hilton, alt: "Hilton" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="app-container">
      <h2>Why should you choose Hexnode?</h2>
      <div className="testimonial-slider">
        <button
          className={`arrow left-arrow ${currentIndex === 0 ? "disabled" : ""}`}
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          &#8249;
        </button>
        <div className="testimonial-content">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="testimonial-image"
          />
          <div className="testimonial-text">
            <p className="quote">"{testimonials[currentIndex].quote}"</p>
            <p className="name">{testimonials[currentIndex].name}</p>
            <p className="position">{testimonials[currentIndex].position}</p>
            <p className="company">{testimonials[currentIndex].company}</p>
          </div>
        </div>
        <button
          className={`arrow right-arrow ${
            currentIndex === testimonials.length - 1 ? "disabled" : ""
          }`}
          onClick={handleNextClick}
          disabled={currentIndex === testimonials.length - 1}
        >
          &#8250;
        </button>
      </div>
      <div className="logo-slider">
        {logos.map((logo, index) => (
          <div className="logo" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

// export default Testimonials;
