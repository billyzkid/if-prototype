"use strict";

const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const npm = require("npm");

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadURL(url.format({
    pathname: path.join(__dirname, "/index.html"),
    protocol: "file:",
    slashes: true
  }));

  win.webContents.executeJavaScript(`
    const path = require("path");
    module.paths.push(path.resolve('node_modules'));
    module.paths.push(path.resolve('../node_modules'));
    module.paths.push(path.resolve('../app.asar/node_modules));
    module.paths.push(path.resolve('../electron.asar/node_modules));
    module.paths.push(path.resolve('../../app.asar/node_modules));
    module.paths.push(path.resolve('../../electron.asar/node_modules));
    module.paths.push(path.resolve('../../../app.asar/node_modules));
    module.paths.push(path.resolve('../../../electron.asar/node_modules));
    module.paths.push(path.resolve('../../../../app.asar/node_modules));
    module.paths.push(path.resolve('../../../../electron.asar/node_modules));
    module.paths.push(path.resolve('../../../../../app.asar/node_modules));
    module.paths.push(path.resolve('../../../../../electron.asar/node_modules));
  `);

  win.webContents.on("did-finish-load", () => {
    npm.load(() => {
      npm.commands.install(["sillyname"], (error) => {
        if (error) {
          console.error(error);
        } else if (win) {
          const generateName = require("sillyname");
          const sillyName = generateName();
          win.webContents.send("silly", sillyName);
        }
      });
    });
  });

  win.on("closed", () => {
    win = null;
  });
}

npm.on("log", (message) => {
  console.log(message);
});

app.on("ready", () => {
  createWindow();
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});