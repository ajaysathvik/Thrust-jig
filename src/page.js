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

const GraphSection = ({ name, data }) => (
  <MultiAxisDemo
    name={name}
    scdata={data}
    liveDataStream={data.datasets[0].data[data.datasets[0].data.length - 1]}
  />
);

export const Page = () => {
  const graphData = [
    { name: "Temperature", data: tempdata },
    { name: "Current", data: currentdata },
    { name: "Voltage", data: voltdata },
    { name: "Rpm", data: rpmdata },
    { name: "Torque", data: torquedata },
    { name: "Thrust", data: thrustdata },
  ];

  return (
    <div>
      <section className="flex flex-col">
        {graphData.reduce((acc, graph, index) => {
          if (index % 2 === 0) acc.push([]);
          acc[acc.length - 1].push(graph);
          return acc;
        }, []).map((row, rowIndex) => (
          <div key={rowIndex} className="w-full flex flex-row">
            {row.map((graph) => (
              <GraphSection key={graph.name} name={graph.name} data={graph.data} />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};