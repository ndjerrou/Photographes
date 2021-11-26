import data from "./data.json";
import { dispPhotographers } from "./dispPhotographers";

const { media, photographers } = data;

const ul = document.querySelector("ul");
ul.innerHTML = "";

// Boucler sur nos tags
const uniqueTags = {};

photographers.forEach((p) => {
  p.tags.forEach((tag) => {
    uniqueTags[tag] = 1;
  });
});

const tags = Object.keys(uniqueTags);

let filteredPhotographers = [];

tags.forEach((tag) => {
  const li = document.createElement("li");
  li.textContent = tag;

  li.addEventListener("click", (e) => {
    const tagClicked = e.target.textContent;

    filteredPhotographers = photographers.filter((p) => {
      return p.tags.includes(tagClicked);
    });

    dispPhotographers(filteredPhotographers);
  });

  ul.appendChild(li);
});

dispPhotographers(photographers);
