import Terminal from "xterm";
import story from "./stories/story_01";

const prompt = "> ";

const keyCodes = {
  backspace: 8,
  enter: 13
};

const terminal = new Terminal({ cursorBlink: true });
terminal.open(document.getElementById("terminal-container"));
terminal.write(`\x1b[1;3;31m${story.title}\x1b[0m`);
terminal.write(`\r\n${prompt}`);

terminal.on("key", (key, event) => {
  switch (event.keyCode) {

    // handle enter key
    case keyCodes.enter:

      terminal.write(`\r\n${prompt}`);
      break;

    // handle backspace key
    case keyCodes.backspace:

      if (terminal.x > prompt.length) {
        terminal.write("\b \b");
      }

      break;

    // handle other key
    default:

      if (!event.altKey && !event.altGraphKey && !event.ctrlKey && !event.metaKey) {
        terminal.write(key);
      }

      break;
  }
});

terminal.on("paste", () => {
  document.execCommand("paste");
});