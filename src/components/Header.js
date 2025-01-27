import "./Header.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Awards from "./Awards";
import KisokModes from "./KisokModes";
import AdditionalPossibilities from "./AdditionalPossibilities";
import Testimonials from "./Testimonials";
import PlatformsSupported from "./PlatformsSupported";
import Hexnode from "./images/hexnode-kiosk.webp";

function Header() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setError("Please enter your work email!");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      setError("");
      // Handle the form submission (e.g., API call)
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="landing-container">
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
          <div className="logo">hexnode</div>
          <button className="trial-button">14 DAY FREE TRIAL</button>
        </header>
        <div className="content">
          <div className="text-content">
            <h1 class="headline">
              Turn your devices into kiosks in a few minutes with Hexnode UEM
            </h1>
            <div className="email-form">
              <input
                type="email"
                placeholder="Your Work Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="cta-button" onClick={handleSubmit}>
                GET STARTED NOW!
              </button>
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
          <div className="image-content">
            <img src={Hexnode} alt="Tablet 1" className="tablet-image" />
          </div>
        </div>
        <Awards></Awards>
        <KisokModes></KisokModes>
        <AdditionalPossibilities></AdditionalPossibilities>
        <Testimonials></Testimonials>
        <PlatformsSupported />
      </div>
    </>
  );
}
export default Header;
