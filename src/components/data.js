const log = require("electron-log");

const tempdata = {
  datasets: [
    {
      label: "Temperature",
      fill: false,
      yAxisID: "y",
      borderColor: "#0c2c47",
      tension: 0.4,
      data: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
        { x: 6, y: 6 },
        { x: 7, y: 7 },
        { x: 8, y: 8 },
        { x: 9, y: 9 },
        { x: 10, y: 10 }
      ],
    },
  ],
};

const currentdata = {
  datasets: [
    {
      label: "Current",
      fill: false,
      yAxisID: "y",
      borderColor: "#0c2c47",
      tension: 0.4,
      data: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
        { x: 6, y: 6 },
        { x: 7, y: 7 },
        { x: 8, y: 8 },
        { x: 9, y: 9 },
        { x: 10, y: 10 }
      ],
    },
  ],
};

const voltdata = {
  datasets: [
    {
      label: "Voltage",
      fill: false,
      borderColor: "#0c2c47",
      yAxisID: "y",
      tension: 0.4,
      data: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
        { x: 6, y: 6 },
        { x: 7, y: 7 },
        { x: 8, y: 8 },
        { x: 9, y: 9 },
        { x: 10, y: 10 }
      ],
    },
  ],
};

const rpmdata = {
  datasets: [
    {
      label: "Rpm",
      fill: false,
      borderColor: "#0c2c47",
      yAxisID: "y",
      tension: 0.4,
      data: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
        { x: 6, y: 6 },
        { x: 7, y: 7 },
        { x: 8, y: 8 },
        { x: 9, y: 9 },
        { x: 10, y: 10 }
      ],
    },
  ],
};

const torquedata = {
  datasets: [
    {
      label: "Torque",
      fill: false,
      yAxisID: "y",
      borderColor: "#0c2c47",
      tension: 0.4,
      data: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
        { x: 6, y: 6 },
        { x: 7, y: 7 },
        { x: 8, y: 8 },
        { x: 9, y: 9 },
        { x: 10, y: 10 }
      ],
    },
  ],
};

const thrustdata = {
  datasets: [
    {
      label: "Thrust",
      fill: false,
      borderColor: "#0c2c47",
      yAxisID: "y",
      tension: 0.4,
      data: [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 5 },
        { x: 6, y: 6 },
        { x: 7, y: 7 },
        { x: 8, y: 8 },
        { x: 9, y: 9 },
        { x: 10, y: 10 }
      ],
    },
  ],
};

const throttlescale = {
  value: 50,
};
const tempScale = {
  value: 30,
};
const currentScale = {
  value: 70,
};

const batterylifeScale = {
  value: 30,
};

function addtoData(data, value) {
  data.datasets[0].data.push(value);
}

function datacollection(data) {
  const values = data.split(" ");
  if (values.length === 5) {
    const [temp, current, voltage, rpm, thrust] = values;
    log.info("Temperature: ", temp);
    log.info("Current: ", current);
    log.info("Voltage: ", voltage);
    log.info("Rpm: ", rpm);
    log.info("Thrust: ", thrust);
    addtoData(tempdata, temp);
    addtoData(currentdata, current);
    addtoData(voltdata, voltage);
    addtoData(rpmdata, rpm);
    addtoData(thrustdata, thrust);
  }
}

module.exports = {
  addtoData,
  datacollection,
  tempdata,
  currentdata,
  voltdata,
  rpmdata,
  torquedata,
  thrustdata,
  throttlescale,
  tempScale,
  currentScale,
  batterylifeScale,
};
