import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <h2>Navigation Tabs</h2>
      
      {/* Tab Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("about")}>About</button>
        <button onClick={() => setActiveTab("contact")}>Contact</button>
      </div>

      {/* Conditional Content Rendering */}
      <div>
        {activeTab === "home" && <p>Welcome to the Home Page! This is the main dashboard.</p>}
        {activeTab === "about" && <p>About Us: We are learning React from scratch to get an 8 LPA job.</p>}
        {activeTab === "contact" && <p>Contact: Email us at job@productcompany.com</p>}
      </div>
    </div>
  );
}

export default Tabs;