import React from "react";
import ReactDOM from "react-dom";
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
            name="Temperature"
            scdata={tempdata}
            liveDataStream={
              tempdata.datasets[0].data[tempdata.datasets[0].data.length - 1]
            }
          />
          <MultiAxisDemo
            name="Current"
            scdata={currentdata}
            liveDataStream={
              currentdata.datasets[0].data[
                currentdata.datasets[0].data.length - 1
              ]
            }
          />
        </div>
        <div className="size-full flex flex-row">
          <MultiAxisDemo
            name="Voltage"
            scdata={voltdata}
            liveDataStream={
              voltdata.datasets[0].data[voltdata.datasets[0].data.length - 1]
            }
          />
          <MultiAxisDemo
            name="Rpm"
            scdata={rpmdata}
            liveDataStream={
              rpmdata.datasets[0].data[rpmdata.datasets[0].data.length - 1]
            }
          />
        </div>
        <div className="size-full flex flex-row">
          <MultiAxisDemo
            name="Torque"
            scdata={torquedata}
            liveDataStream={
              torquedata.datasets[0].data[
                torquedata.datasets[0].data.length - 1
              ]
            }
          />
          <MultiAxisDemo
            name="Thrust"
            scdata={thrustdata}
            liveDataStream={
              thrustdata.datasets[0].data[
                thrustdata.datasets[0].data.length - 1
              ]
            }
          />
        </div>
      </section>
    </div>
  );
};
