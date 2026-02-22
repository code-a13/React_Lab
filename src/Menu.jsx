import React from "react";

function Menu({ setActiveComponent }) {
  return (
    <div style={{ width: "250px", borderRight: "1px solid #ddd", padding: "15px", background: "#f9f9f9", overflowY: "auto" }}>
      <h2>Lab Programs</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    
        <button onClick={() => setActiveComponent("counter")}>1. Counter</button>
        <button onClick={() => setActiveComponent("todolist")}>2. Todo List</button>
        <button onClick={() => setActiveComponent("formexample")}>3. Form Submit</button>
        <button onClick={() => setActiveComponent("color")}>4. BG Color Change</button>
        
        <hr style={{ width: "100%" }} />

    
        <button onClick={() => setActiveComponent("greeting")}>5. Dynamic Greeting</button>
        <button onClick={() => setActiveComponent("calculator")}>6. Live Calculator</button>

        <hr style={{ width: "100%" }} />

       
        <button onClick={() => setActiveComponent("userlist")}>7. API User List</button>
        <button onClick={() => setActiveComponent("tabs")}>8. Navigation Tabs</button>

        <hr style={{ width: "100%" }} />

       
        <button onClick={() => setActiveComponent("theme")}>9. Theme Toggle</button>
        <button onClick={() => setActiveComponent("blog")}>10. Mini Blog</button>
      </div>
    </div>
  );
}

export default Menu;