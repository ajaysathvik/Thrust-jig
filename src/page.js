import React from "react";
import "../App.css";
import MultiAxisDemo from "./components/singlegraph";
import {
  tempdata,
  currentdata,
  voltdata,
  rpmdata,
  torquedata,
  thrustdata,
} from "./components/data";

export const Page = () => {
  return (
    <div>
      <section className="flex flex-col">
        <div className="w-full flex flex-row">
          <MultiAxisDemo
            namey="Temperature"
            namex="Time"
          />
          <MultiAxisDemo
            namey="Current"
            namex="Time"
          />
        </div>
        <div className="size-full flex flex-row">
          <MultiAxisDemo
            namex="Time"
            namey="Voltage"
          />
          <MultiAxisDemo
            namex="Time"
            namey="Rpm"
          />
        </div>
        <div className="size-full flex flex-row">
          <MultiAxisDemo
            namex="Time"
            namey="Torque"
          />
          <MultiAxisDemo
            namex="Time"
            namey="Thrust"
          />
        </div>
      </section>
    </div>
  );
};
