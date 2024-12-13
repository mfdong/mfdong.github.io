const abouts = [
  "the beauty of",
  "your frustrations with",
  "a secret about",
  "a regret you have about",
  "a dream you have about",
  "what you miss about",
];

const things = [
  "riding the subway",
  "your best friend",
  "your parents",
  "a faraway place",
  "last night",
  "sunsets",
];

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function getAbout() {
  return abouts[getRandomIndex(abouts.length)];
}

function getThing() {
  return things[getRandomIndex(things.length)];
}

function myFunction() {
  document.getElementById("about").innerHTML = getAbout();
  document.getElementById("thing").innerHTML = getThing();
}
