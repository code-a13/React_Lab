import React, { useState, useEffect } from "react";

function Greeting() {
  const [hour, setHour] = useState(new Date().getHours());

  // Conditional logic based on time
  let message = "";
  if (hour < 12) message = "Good Morning";
  else if (hour < 18) message = "Good Afternoon";
  else message = "Good Evening ";

  return (
    <div>
      <h2>Dynamic Greeting</h2>
      <h3>{message}</h3>
      <p>Current Hour: {hour}</p>
    </div>
  );
}

export default Greeting;