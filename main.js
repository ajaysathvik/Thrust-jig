const { app, BrowserWindow } = require("electron");
const SerialPort = require("serialport");
const ReadlineParser = require("@serialport/parser-readline");
const {datacollection} = require("./src/components/data");
const path = require("path");

// const port = new SerialPort({ path: "COM15", baudRate: 9600 });
// const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

// function collectData() {
//   parser.on("data", (data) => {
//     datacollection(data)
//   });
// }

// function collectData() {
//   datacollection("25 0.5 12 1000 2");
// }

// collectData();

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("index.html");
}

const template = [
  {
    label: "File",
    submenu: [
      {
        label: "OPEN",
        click() {
          console.log("OPEN");
        },
      },
      {
        label: "SAVE",
        click() {
          console.log("SAVE");
        },
      },
    ],
  },
];

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
