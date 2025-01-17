import React, { useState } from "react";
import "./AdditionalPossibilities.css";
import kioskImage from "./images/effortless-kiosk-deployement-image.webp";
import customizedInterface from "./images/customized-interface-image.webp";
import power from "./images/power-up-protection-image.webp";
import SecureApp from "./images/secure-app-ecosystem.webp";
import easy from "./images/easy-to-use-interface-image.webp";


const AdditionalPossibilities = () => {
  const [activeContent, setActiveContent] = useState("effortless");

  const contentData = {
    effortless: {
      title: "Effortless kiosk deployment & management",
      description:
        "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",
      imgSrc: kioskImage,
    },
    customized: {
      title: "Customized interface for brand visibility",
      description:
        "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",
      imgSrc: customizedInterface,
    },
    more: {
      title: "What more can you do with Hexnode kiosk?",
      description:
        "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",
      imgSrc: power,
    },
    secure: {
      title: "Secure and update your app ecosystem",
      description:
        "Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.",
      imgSrc: SecureApp,
    },
    provide: {
      title: "Provide an easy-to-use interface for end-users",
      description:
        "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.",
      imgSrc: easy,
    },
  };

  const handleClick = (key) => {
    setActiveContent(key);
  };

  return (
    <div className="kiosk-container">
      <h2>What additional possibilities does the Kiosk mode offer?</h2>
      <div className="kiosk-content">
        {/* Image Section */}
        <div className="image-section">
          <img
            src={contentData[activeContent].imgSrc}
            alt={contentData[activeContent].title}
          />
        </div>
        {/* Content Section */}
        <div className="content-section">
          {Object.keys(contentData).map((key) => (
            <div
              key={key}
              className={`content-item ${activeContent === key ? "active-item" : ""}`}
            >
              <p
                className={`title ${activeContent === key ? "active" : ""}`}
                onClick={() => handleClick(key)}
              >
                {contentData[key].title}
              </p>
              {activeContent === key && (
                <div className="content-description">
                  {/* Render Description */}
                  <p>{contentData[key].description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalPossibilities;

