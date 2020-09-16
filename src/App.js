import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import routes from "./routes";

function App(props) {
  return (
    <div>
      {routes}
      <Nav />
    </div>
  );
}

export default App;
