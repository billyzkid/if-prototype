"use strict";

const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadURL(url.format({
    pathname: path.join(__dirname, "/index.html"),
    protocol: "file:",
    slashes: true
  }));
  
  // win.webContents.on("did-finish-load", () => {
  //   const npm = require("npm");
  //   npm.load(() => {
  //     npm.commands.install(["sillyname"], (error) => {
  //       if (error) {
  //         console.error(error);
  //       } else if (win) {
  //         win.webContents.send("did-finish-load-plugins");
  //       }
  //     });
  //   });
  // });

  win.on("closed", () => {
    win = null;
  });
}

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