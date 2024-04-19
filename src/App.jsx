// V2 OF APP

// React library imports
import React from "react";

// Components impors
import Dispatcher from "./components/Dispatcher";

// CSS imports (add more after bootstrap)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

// Logo imports
import iconLogo from "./assets/logos/iconlogogroupvotes.png";
import textLogo from "./assets/logos/textlogogroupvotes.png";

// Main App
const App = () => {
  const today = new Date();
  const day = today.toLocaleString([], { weekday: "long" });
  const date = today.toLocaleDateString([], { dateStyle: "long" });

  return (
    <div className="container">
      <div className="logo-container">
        <img src={iconLogo} alt="Icon Logo" className="logo-icon" />
        <img src={textLogo} alt="Text Logo" className="logo-text" />
      </div>
      <p>
        Today is {day}, {date}.
      </p>

      <Dispatcher />

    </div>
  );
};

export default App;
