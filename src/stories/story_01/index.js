import { Story, Person, Place, Thing } from "../../core";

const story = new Story();
story.title = "Story 1";

const place = new Place();
place.name = "Place 1";
story.children.push(place);

const person = new Person();
person.name = "Person 1";
place.children.push(person);

const thing = new Thing();
thing.name = "Thing 1";
person.children.push(thing);

// story.on("begin", () => {
//   this.tell("It was a dark and stormy night.");
// });

export default story;