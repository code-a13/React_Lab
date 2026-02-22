import { useState } from "react";

// Importing all 10 components
import Menu from "./Menu";
import Counter from "./Counter";
import TodoList from "./ToDoList"; 
import FormExample from "./FormExample"; 
import Color from "./Color";
import Greeting from "./Greeting";
import Calculator from "./Calculator";
import UserList from "./UserList";
import Tabs from "./Tabs";
import ThemeToggle from "./ThemeToggle";
import MiniBlog from "./MiniBlog";

function App() {
  
  const [activeComponent, setActiveComponent] = useState("counter");

  const renderComponent = () => {
    switch (activeComponent) {
      case "counter": return <Counter />;
      case "todolist": return <TodoList />;
      case "formexample": return <FormExample />;
      case "color": return <Color />;
      case "greeting": return <Greeting />;
      case "calculator": return <Calculator />;
      case "userlist": return <UserList />;
      case "tabs": return <Tabs />;
      case "theme": return <ThemeToggle />;
      case "blog": return <MiniBlog />;
      default: return <Counter />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", margin: 0 }}>
    
      <Menu setActiveComponent={setActiveComponent} />
      
    
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;