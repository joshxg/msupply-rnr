const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
const server = require("./server");

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.webContents.openDevTools();
  const startUrl = process.env.ELECTRON_START_URL
    ? process.env.ELECTRON_START_URL
    : url.format({
        pathname: path.join(__dirname, "/../build/index.html"),
        protocol: "file:",
        slashes: true
      });
  win.loadURL(startUrl);
  server(app.getPath("userData"));
}

app.on("ready", createWindow);
