const { app, BrowserWindow } = require("electron");

const { fork } = require("child_process");

const server = require("./server");

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile("build/index.html");

  fork(server(app.getAppPath("userData")));
}

app.on("ready", createWindow);
