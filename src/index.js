import Terminal from "xterm";
import story from "./stories/story_01";

const prompt = "> ";
const terminal = new Terminal({ cursorBlink: true });

terminal.open(document.getElementById("app"));
terminal.write(`\x1b[?25l\r\x1b[0m${story.title}\x1b[0K\r\n\x1b[0K\r\n${prompt}\x1b[0K\r\x1b[${prompt.length + 1}G\x1b[?25h`);

let input = "";

terminal.on("data", (data) => {
  if (data === "\r") {
    const output = story.ask(input);
    input = "";
    terminal.write(`\x1b[?25l\r\n${output}\x1b[0K\r\n\x1b[0K\r\n${prompt}\x1b[0K\r\x1b[${prompt.length + 1}G\x1b[?25h`);
  } else {
    input += data;
    terminal.write(`\x1b[?25l\r${prompt}${input}\x1b[0K\r\x1b[${(prompt + input).length + 1}G\x1b[?25h`);
  }
});