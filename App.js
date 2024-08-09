import React from "react";
import ReactDOM from "react-dom";
import { Page } from "./src/page";
import "./App.css";
import { Nav } from "./src/components/Nav";
import { Meter } from "./src/components/Meter";
import { collectData } from "./src/components/data";

const App = () => {
  collectData();
  return (
    <div className="flex flex-col w-full justify-center">
      <Meter />
      <Page />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
