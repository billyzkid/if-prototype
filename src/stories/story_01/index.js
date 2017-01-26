// import { Story, Person, Place, Thing } from "../../core";
import core from "../../core";

const story = new core.Story();
story.title = "Story #1";

const place = new core.Place(); // eslint-disable-line no-unused-vars
// story.Add(place);

const person = new core.Person(); // eslint-disable-line no-unused-vars
// place.Add(person);

const thing = new core.Thing(); // eslint-disable-line no-unused-vars
// person.Add(thing);

// story.on("begin", () => {
//   this.tell("It was a dark and stormy night.");
// });

export default story;