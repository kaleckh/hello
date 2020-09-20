import React from "react";
import "./App.css";
import routes from "./routes";
import Nav from "./Components/Nav";

function App(props) {
  return (
    <div>
      {" "}
      {routes}
      <Nav />
    </div>
  );
}

export default App;
