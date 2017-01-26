import core, { Person, Place, Thing } from "../../core";

const story = new core.Story(); // eslint-disable-line import/no-named-as-default-member
story.title = "Story #1";

const place = new Place(); // eslint-disable-line no-unused-vars
// story.Add(place);

const person = new Person(); // eslint-disable-line no-unused-vars
// place.Add(person);

const thing = new Thing(); // eslint-disable-line no-unused-vars
// person.Add(thing);

// story.on("begin", () => {
//   this.tell("It was a dark and stormy night.");
// });

export default story;