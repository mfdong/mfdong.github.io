var c = 0;

var when = ["hate-stalk professional backgrounds and linkedin pages", "crave matcha ice cream after a night out", "explain the years-long lore of my chemical romance ships", "let me sleep in on weekdays", "make me feel capable of anything", "eyeroll at pretentious white man letterboxd reviews", "pity my piss-weak stomach", "show off your media literacy skills", "know all the best places to eat dinner", "listen to me talk about league of legends strategy", "stay in with me", "reblog cursed content", "find endlessly fascinating ways to wear the color black", "always do your eyeliner perfectly", "accomplish amazing things", "spend hours every week searching for the perfect couch", "make sure your cat eats all her food", "color coordinate your furniture", "enable my burgeoning boba addiction", "binge watch a horror game playthrough on youtube and spend the day in despair", "complain about cryptocurrency bros even though you know way too much about blockchain", "make me feel shameless for crying", "feel tired too", "watch pretentious movies with me at the IFC", "spend the day vibing out in cyberspace", "bring me back to earth", "let me squeeze your cheeks", "fervently do laundry", "laugh at me when i say something stupid", "describe faraway places you want to take me", "repeat something i didn't hear", "take care of me", "let me take care of you", "translate memes for me", "become completely and utterly obsessed with fat cats on instagram", "lose yourself in a manga for the weekend", "talk about the monkeys on your old school bus route", "share things that you've never said out loud before", "trust me", "unravel yourself for me", "get excited about uni at omakase", "shoulder my sunday scaries", "slap my ass", "have such good taste in zines.. yes, the ones on your bookshelf", "have the softest lips", "spoil me for no reason", "make funny noises when you wake", "embrace your inner gremlin", "help me change my mind", "massage the back of my neck", "make dozens of spotify playlists and never show anyone", "ask me to gatekeep your favorite museums", "get full from just the appetizer", "are the biggest pui pui molcar stan"];


$("._total").text(when.length);
$("#progress").attr("max", when.length);


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// shuffle on start
$(function () {
  shuffle(when);
});

$("main").click(function (e) {
  // Check for left button, progress listener for clicking
  if (e.button == 0) {


    if (c >= when.length) {

      $("<p>love me too </p>").hide().prependTo("#when-you").fadeIn(2000);

      $(".slider").fadeOut();

      $("body").css('background', '#000');
      $("#g p").css('color', '#fff');

      $("main").unbind("click");

      return;

    }


    $("<p>" + when[c] + "</p>").hide().prependTo("#when-you").fadeIn(2000);


    updateSlider();

    c++;
  }

});

// progress listener for input slider
$(document).on('input', '#progress', function () {

  var prev = parseInt(c);
  var diff = 0;

  c = parseInt($(this).val());
  updateSlider();

  console.log(c + " prev:" + prev);

  if (prev > c) { // remove, reverse
    
    diff = prev - c;
    console.log("Remove", diff);

    for (let i = 0; i < diff; i++) {
      $("#when-you").find('p').first().remove();
    }

  } else { // add, progress
    
    diff = c - prev;
    console.log("Increase", diff);

    for (let i = 0; i < diff; i++) {
      let n = parseInt(prev) + i;
      console.log(n + " " + when[n]);
      $("<p>" + when[n] + "</p>").hide().prependTo("#when-you").fadeIn(2000);
    }
    
  }


  $("#progress").attr("value", $(this).val());

});


function updateSlider() {
  $("._done").text(c);
  $("#progress").attr("value", c);
}
