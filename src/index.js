import "babel-polyfill";
import value from "./world";

document.getElementById("output").innerHTML = `Hello ${value}!`;