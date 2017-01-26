import Terminal from "xterm";
import value from "./world";

const terminal = new Terminal();
terminal.open(document.getElementById("terminal-container"));
terminal.write(`Hello \x1b[1;3;31m${value}\x1b[0m!`);