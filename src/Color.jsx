import { useState } from "react";

function Color() {

  const colors = ["#FF5733", "#33FF57", "#3357FF"];
  const [index, setIndex] = useState(0);

  const handleChange = () => {
    
    setIndex((ind) => (ind + 1) % colors.length);
  };

  return (
    <div
      style={{
        height: "100%", 
        width: "100%",
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
      }}
    >
      <div
        style={{
          backgroundColor: colors[index],
 
          width: "80vmin", 
          height: "80vmin", 
      
          borderRadius: "30px", 
        

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          transition: "background-color 0.3s ease" 
        }}
      >
        <button
       
          onClick={handleChange} 
          style={{
            borderRadius: "8px",
            border: "none",
            padding: "15px 30px",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Color;