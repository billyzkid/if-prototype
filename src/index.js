import Terminal from "xterm";
import story from "./stories/story_01";

const keyCodes = {
  backspace: 8,
  enter: 13
};

const prompt = "> ";
const terminal = new Terminal({ cursorBlink: true });

terminal.open(document.getElementById("app"));
terminal.write(`\x1b[1;31m${story.title}\x1b[0m`);
terminal.write(`\r\n\r\n${prompt}`);

let y = terminal.y + terminal.ybase;

function getInput() {
  const y1 = y;
  const y2 = terminal.y + terminal.ybase + 1;
  const x1 = prompt.length;
  const x2 = terminal.x + (terminal.cols * (y2 - y1 - 1));

  let s = "";

  terminal.lines.slice(y1, y2).forEach((row) => {
    row.forEach((col) => {
      s += col[1];
    });
  });

  return s.slice(x1, x2);
}

terminal.on("key", (key, event) => {
  switch (event.keyCode) {

    // handle enter key
    case keyCodes.enter: {
      const input = getInput();
      const output = story.ask(input);

      terminal.write(`\r\n\x1b[1;32m${output}\x1b[0m`);
      terminal.write(`\r\n\r\n${prompt}`);

      y = terminal.y + terminal.ybase;

      break;
    }

    // handle backspace key
    case keyCodes.backspace: {
      if (terminal.x > prompt.length) {
        terminal.write("\b \b");
      }

      break;
    }

    // handle other key
    default: {
      if (!event.altKey && !event.altGraphKey && !event.ctrlKey && !event.metaKey) {
        terminal.write(key);
      }

      break;
    }
  }
});