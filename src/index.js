import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// const nums = [1, 2, 3,4, 5];
// const numSquared =nums.map(num => num*num);
// console.log(numSquared);

// const names = ["alice", "bob", "charlie", "danielle"];
// const capNames = names.map(name => name[0].toUpperCase().concat(name.slice(1)));
// console.log(capNames);

// const given = ["Bulbasaur", "Charmander", "Squirtle"];
// let htmlGiven = given.map((name) => "<p>".concat(name).concat("<p>"));
// let htmlGiven2 = given.map(name => `<p>${name}<p>`);

// console.log(htmlGiven);
// console.log(htmlGiven2);
