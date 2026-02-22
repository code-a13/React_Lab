import React, { useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dynamic styling based on state
  const themeStyles = {
    backgroundColor: isDarkMode ? "#333" : "#FFF",
    color: isDarkMode ? "#FFF" : "#000",
    padding: "50px",
    height: "100%",
    transition: "all 0.3s ease" 
  };

  return (
    <div style={themeStyles}>
      <h2>{isDarkMode ? "Dark Mode Active " : "Light Mode Active "}</h2>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;