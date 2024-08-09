import React from "react";
import ReactDOM from "react-dom";
import "../../App.css";
import { NavButton } from "./NavButton";

export const Nav = () => {
  return (
    <div className="flex flex-row">
      <NavButton name ="Graph"/>
      <NavButton name ="Meter"/>
    </div>
  );
};
