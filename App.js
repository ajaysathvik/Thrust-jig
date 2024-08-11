import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { Page } from "./src/page";
import "./App.css";
import { Meter } from "./src/components/Meter";
import MultiAxisDemo from "./src/components/singlegraph";

const App = () => {
  const tempChartRef = useRef(null);
  const currentChartRef = useRef(null);
  const voltageChartRef = useRef(null);
  const rpmChartRef = useRef(null);
  const thrustChartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const portPath = 'COM14';
        const result = await window.electronAPI.openPort(portPath);
        
        if (result.success) {
          console.log('Port COM15 opened successfully');
          
          while (true) {
            const readResult = await window.electronAPI.readData();
            if (readResult.success) {
              const values = readResult.data.split(" ");
              if (values.length === 5) {
                const [temp, current, voltage, rpm, thrust] = values.map(parseFloat);
                
                if (tempChartRef.current) tempChartRef.current.addDataPoint(temp);
                if (currentChartRef.current) currentChartRef.current.addDataPoint(current);
                if (voltageChartRef.current) voltageChartRef.current.addDataPoint(voltage);
                if (rpmChartRef.current) rpmChartRef.current.addDataPoint(rpm);
                if (thrustChartRef.current) thrustChartRef.current.addDataPoint(thrust);
              }
            }
            // Add a small delay to prevent tight looping
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        } else {
          console.error('Failed to open COM15');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full justify-center">
      <Meter />
      {/* <Page /> */}
      <MultiAxisDemo ref={tempChartRef} namex="Time" namey="Temperature (°C)" />
      <MultiAxisDemo ref={currentChartRef} namex="Time" namey="Current (A)" />
      <MultiAxisDemo ref={voltageChartRef} namex="Time" namey="Voltage (V)" />
      <MultiAxisDemo ref={rpmChartRef} namex="Time" namey="RPM" />
      <MultiAxisDemo ref={thrustChartRef} namex="Time" namey="Thrust (N)" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);