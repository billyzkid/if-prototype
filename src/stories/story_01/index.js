import { Story, Person, Place, Thing } from "../../core";
import { Plane, Train, Automobile } from "../../extensions/vehicles";

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

const plane = new Plane();
plane.name = "Plane 1";
plane.fly();
story.children.push(plane);

const train = new Train();
train.name = "Train 1";
train.operate();
story.children.push(train);

const automobile = new Automobile();
automobile.name = "Automobile 1";
automobile.drive();
story.children.push(automobile);

// story.on("begin", () => {
//   this.tell("It was a dark and stormy night.");
// });

export default story;