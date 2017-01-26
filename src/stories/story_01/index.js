import Story from "../../core/Story";
import Person from "../../core/Person";
import Place from "../../core/Place";
import Thing from "../../core/Thing";

const story = new Story();
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