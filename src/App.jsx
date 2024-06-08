import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Nav } from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Homepage</h1>
      <Nav />
    </div>
  );
}

export default App;
