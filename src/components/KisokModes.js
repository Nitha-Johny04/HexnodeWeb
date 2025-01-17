import React, { useState } from "react";
import "./KisokModes.css";
import SingleAppKiosk from "./images/single-app-kios-image.webp";
import MultiAppKiosk from "./images/multi-app-kiosk-image.webp";
import WebbasedKiosk from "./images/web-based-kiosk-image.webp";
import DigitalSignages from "./images/digital-signage-kiosk-image.webp";
import ASAMKiosk from "./images/asam-kiosk-image.webp";

function KisokModes() {
  const [activeTab, setActiveTab] = useState("Single App Kiosk");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs-container">
      <h2>Specific kiosk modes for unique use cases</h2>
      <div className="tabs-wrapper">
        <div className="tabs">
          {[
            "Single App Kiosk",
            "Multi-App Kiosk",
            "Web-based Kiosk",
            "Digital Signages",
            "ASAM Kiosk",
          ].map((tab, index) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
              {index < 4 && <div className="tab-separator"></div>}
            </div>
          ))}
        </div>
        <div className="tab-content">
          {activeTab === "Single App Kiosk" && (
            <div className="content-image">
              <div>
                <h3>
                  Powerful Single-App Kiosk solutions for enhanced control
                </h3>
                <ul>
                  <li>
                    Provision the devices to run one specialized application,
                    with limited functionalities.
                  </li>
                  <li>
                    Customize the device settings to cater to a specific
                    use-case each time.
                  </li>
                  <li>
                    Use Hexnode’s Advanced Kiosk settings for additional
                    restrictions or expanded device functionalities while in
                    kiosk mode.
                  </li>
                  <li>
                    Empower your administrators with full control over the kiosk
                    devices.
                  </li>
                </ul>
              </div>
              <img src={SingleAppKiosk} alt="Digital Signage Kiosk" />
            </div>
          )}
          {/* Add content for other tabs here */}
          {activeTab === "Multi-App Kiosk" && (
            <div className="content-image">
              <div>
                <h3>Elevate efficiency with Multi-App Kiosk</h3>
                <ul>
                  <li>
                    Limit device access to approved apps, ensuring focus and
                    productivity.
                  </li>
                  <li>
                    With default phone and settings app inclusion, reduce
                    distractions by providing users access to essential
                    functions only.
                  </li>
                  <li>
                    With Hexnode's peripheral settings admins can allow
                    necessary device settings while retaining control.
                  </li>
                  <li>
                    Simplify device management while empowering user
                    productivity by deploying Multi-App Kiosk Mode.
                  </li>
                </ul>
              </div>

              <img src={MultiAppKiosk} alt="Digital Signage Kiosk" />
            </div>
          )}
          {/* third tab*/}
          {activeTab === "Web-based Kiosk" && (
            <div className="content-image">
              <div>
                <h3>Explore the new way to manage web apps and websites</h3>
                <ul>
                  <li>
                    Limit device access to approved apps, ensuring focus and
                    productivity.
                  </li>
                  <li>
                    With default phone and settings app inclusion, reduce
                    distractions by providing users access to essential
                    functions only.
                  </li>
                  <li>
                    With Hexnode's peripheral settings admins can allow
                    necessary device settings while retaining control.
                  </li>
                  <li>
                    Simplify device management while empowering user
                    productivity by deploying Multi-App Kiosk Mode.
                  </li>
                </ul>
              </div>

              <img src={WebbasedKiosk} alt="Digital Signage Kiosk" />
            </div>
          )}
          {/* fourth tab*/}
          {activeTab === "Digital Signages" && (
            <div className="content-image">
              <div>
                {" "}
                <h3>Capture attention with Digital Signage Kiosks</h3>
                <ul>
                  <li>
                    Transform your devices into captivating digital signage
                    kiosks that grab attention.
                  </li>
                  <li>
                    Engage your audience with vibrant images and seamless video
                    streaming.
                  </li>
                  <li>
                    Customize media files with trimming, muting, and background
                    music.
                  </li>
                  <li>
                    Advertise and show off your brand aesthetics to attract
                    customers in different ways.
                  </li>
                  <li>
                    Take control with Hexnode to reestablish your brand's
                    presence.
                  </li>
                </ul>
              </div>

              <img src={DigitalSignages} alt="Digital Signage Kiosk" />
            </div>
          )}

          {/* fifth tab*/}
          {activeTab === "ASAM Kiosk" && (
            <div className="content-image">
              <div>
                <h3>Unlock the power of Autonomous Single App Mode (ASAM)</h3>
                <ul>
                  <li>
                    A feature that empowers your iOS app to seamlessly secure
                    itself in the foreground.
                  </li>
                  <li>
                    Transform tablets or devices into dedicated point-of-sale
                    (POS) systems by preventing interruptions from other
                    applications or notifications.
                  </li>
                  <li>
                    Create focused, efficient and secure digital environments to
                    match your requirements.
                  </li>
                  <li>
                    Configure ASAM effortlessly and elevate your user experience
                    like never before.
                  </li>
                  <li>
                    Take control with Hexnode to reestablish your brand's
                    presence.
                  </li>
                </ul>
              </div>

              <img src={ASAMKiosk} alt="Digital Signage Kiosk" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default KisokModes;
