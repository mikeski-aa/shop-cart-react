import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Nav } from "./components/Nav";
import { getCallResults } from "./components/ApiFetch";

function App() {
  const [thisState, setThisState] = useState();

  getCallResults(setThisState);
  return (
    <div>
      <h1>Homepage</h1>
      <Nav />
      <div role="test" className="lol">
        dddd
      </div>
      <div>{state}</div>
    </div>
  );
}

export default App;
