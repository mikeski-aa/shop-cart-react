import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Nav } from "./components/Nav";
import { getCallResults } from "./components/ApiFetch";
import { callShopApi } from "./components/ApiFetch";

function App() {
  return (
    <div>
      <h1>Homepage</h1>
      <Nav />
      <div role="test" className="lol">
        dddd
      </div>
    </div>
  );
}

export default App;
