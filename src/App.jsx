// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CafeList from "./components/CafeList/CafeList";
import React from "react";

export default function App() {
   // React hooks for states
  const [cafes, setCafes] = React.useState([]);
  // const [keyword, setKeyword] = React.useState("");

  //Reach hooks Effect: make sure its code is executed JUST at the first render
  React.useEffect(() => {
    const url = "https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes";
    // const params = (keyword !== "") ? `?title=${keyword}` : "";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCafes(data);
      });
    console.log("app gets rendered!");
  }, []);
  // cafes which is the state
  // setCafes is function that changes the state for example: setCafes([..., ...])


  return (
    <div className="app-frame">
      <Navbar setCafes={setCafes} />
      <div className="app-body">
        <Sidebar setCafes={setCafes} />
        <CafeList cafes={cafes} />
      </div>
    </div>
  );
}
