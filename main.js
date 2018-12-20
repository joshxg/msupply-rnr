const { app, BrowserWindow } = require("electron");

const server = require("./server");

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile("build/index.html");

  server([app.getAppPath("userData")]);
}

app.on("ready", createWindow);
