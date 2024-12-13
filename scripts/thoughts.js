const abouts = [
  "the beauty of",
  "your frustrations with",
  "a secret about",
  "a regret you have about",
  "a dream you have about",
  "what you miss about",
  "what scares you about",
  "a quirk about",
  "the craziest thing about",
  "what you want to remember from",
  "what you want to take away from",
  "what you admire about",
  "what stinks about",
  "what you can't stand about",
  "your hot take on",
];

const things = [
  "riding the subway",
  "your best friend",
  "your parents",
  "a faraway place",
  "last night",
  "watching the sunset",
  "artificial intelligence",
  "romantic comedies",
  "the stranger across from you",
  "where you want to be",
  "your home",
  "your childhood",
  "dating",
  "being younger",
  "being older",
  "breakfast",
  "having kids",
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
