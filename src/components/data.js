const log = require("electron-log");

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

const tempdata = {
  datasets: [
    {
      label: "Temperature",
      fill: false,
      yAxisID: "y",
      borderColor: "#0c2c47",
      tension: 0.4,
      data: [],
    },
  ],
};

function addtoData(data, value) {
  data.datasets[0].data.push(value);
  return data;
}

const currentdata = {
  datasets: [
    {
      label: "Current",
      fill: false,
      yAxisID: "y",
      borderColor: "#0c2c47",
      tension: 0.4,
      data: [],
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
      data: [],
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
      data: [],
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
      data: [],
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
      data: [],
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
