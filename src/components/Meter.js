import React, { useState, useEffect } from 'react';
import { SimpleGauge } from "react-gauges";
import {
  batterylifeScale,
  currentScale,
  throttlescale,
  tempScale,
} from "./data";
import "../../App.css";

const LiveGauge = ({ label, scale }) => {
  return (
    <div className="flex flex-col items-center">
      <SimpleGauge
        barBaseColor="#ffffff"
        barColor="#d2e3fa"
        indicatorColor="#1a73e8"
        labelColor="#000000"
        value={scale.value}
      />
      <p className="text-xl">{label}</p>
    </div>
  );
};

export function Meter() {
  return (
    <div className="pt-12 flex flex-row gap-10 items-center justify-evenly">
      <LiveGauge label="Current" scale={currentScale} />
      <LiveGauge label="Throttle" scale={throttlescale} />
      <LiveGauge label="Voltage" scale={tempScale} />
      <LiveGauge label="Battery Life" scale={batterylifeScale} />
    </div>
  );
}