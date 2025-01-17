// import React from 'react';
// import './Awards.css';
import React from "react";
import "./Awards.css";
import IDC from "./images/idc.webp";
import Gartner from "./images/gartner.webp";
import Forrester from "./images/forrester.webp";

// const Awards = () => {
//   return (
//     <div className="awards-section">
//       <div className="award">
//       <img src={IDC} alt="IDC Logo" className="image-idc"/>
//         {/* <div className="logo-name">IDC</div> */}
//         <p>
//           Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors
//           Assessment Reports 2024.
//         </p>
//       </div>
//       <div className="award">
//         <div className="logo-name">Gartner</div>
//         <p>
//           Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for
//           Unified Endpoint Management tools 2022.
//         </p>
//       </div>
//       <div className="award">
//         <div className="logo-name">Forrester</div>
//         <p>
//           Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management
//           Landscape, Q3 2023.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Awards;

// import React from 'react';
import "./Awards.css";

const Awards = () => {
  return (
    <div className="awards-section">
      <div className="award">
        <a
          href="https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={IDC} alt="IDC Logo" className="image-idc" />
        </a>
        <p>
          Hexnode is listed as a leader and a major player in IDC MarketScape
          UEM Vendors Assessment Reports 2024.
        </p>
      </div>
      <div className="award">
        <a
          href="https://www.hexnode.com/blogs/hexnode-listed-as-a-notable-vendor-in-gartner-midmarket-context-magic-quadranttm-for-unified-endpoint-management-tools/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Gartner} alt="IDC Logo" className="image-gartner" />
          {/* <div className="logo-name">Gartner</div> */}
        </a>
        <p>
          Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic
          Quadrant for Unified Endpoint Management tools 2022.
        </p>
      </div>
      <div className="award">
        <a
          href="https://www.hexnode.com/blogs/hexnode-included-in-the-unified-endpoint-management-landscape-report/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Forrester} alt="IDC Logo" className="image-forrester" />
        </a>
        <p>
          Forrester includes Hexnode as a Notable vendor in The Unified Endpoint
          Management Landscape, Q3 2023.
        </p>
      </div>
    </div>
  );
};

export default Awards;
