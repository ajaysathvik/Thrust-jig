import React from "react";
import ReactDOM from "react-dom";

export const NavButton = ({ name }) => {
  return (
    <div className="w-32 relative bg-slate-400 flex flex-row justify-center h-10 items-center ml-10 mt-5 p-5 rounded-lg ">
      <h1>{name}</h1>
    </div>
  );
};
