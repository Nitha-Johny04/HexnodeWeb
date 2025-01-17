import React, { useState } from "react";
import "./PlatformsSupported.css";
import Android from "./images/android.svg";
import Windows from "./images/windows.svg";
import IOS from "./images/ios.svg";
import AndroidTv from "./images/android-tv.svg";
import AppleTv from "./images/apple-tv.svg";
import AmazoneFire from "./images/amazon-fire.webp";

function PlatformsSupported() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email.trim()) {
      setError("Please enter your work email!");
    } else {
      setError("");
      //   // Proceed with signup logic
      //   alert("Sign-up successful!");
    }
  };
  return (
    <>
      <div className="App">
        <section className="platforms-section">
          <h2>Platforms supported</h2>
          <div className="platforms">
            <div className="platform">
              <img src={Android} alt="Android" />
            </div>
            <div className="platform">
              <img src={Windows} alt="Windows" />
            </div>
            <div className="platform">
              <img src={IOS} alt="iOS" />
            </div>
            <div className="platform">
              <img src={AndroidTv} alt="Android TV" />
            </div>
            <div className="platform">
              <img src={AppleTv} alt="Apple TV" />
            </div>
            <div className="amazone-fire">
              <img src={AmazoneFire} alt="Fire TV" />
            </div>
          </div>
        </section>
        <section className="signup-section">
          <h2>Sign up and try Hexnode free for 14 days!</h2>
          <div className="signup-form">
            <input
              type="email"
              placeholder="Your Work Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Get Started</button>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="additional-info">
            <span>No credit cards required.</span>
            <a
              href="https://www.hexnode.com/mobile-device-management/request-demo/"
              rel="noopener noreferrer"
            >
              Request a demo
            </a>
          </div>
        </section>
      </div>
      <div className="footer">
        <div className="footer-links">
          <a
            href="https://www.hexnode.com/legal/terms-of-use/"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
          <span>-</span>
          <a href="https://www.hexnode.com/legal/privacy-policy/" rel="noopener noreferrer">
            Privacy
          </a>
          <span>-</span>
          <a href="https://www.hexnode.com/legal/cookies-policy/" rel="noopener noreferrer">
            Cookies
          </a>
        </div>
        <div className="footer-copyright">
          Copyright © 2024 Mitsogo Inc. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default PlatformsSupported;
