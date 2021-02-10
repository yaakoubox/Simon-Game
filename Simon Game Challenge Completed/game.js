////////////////////////////////////////////////////////////////////////////////
var buttonColours = ["red", "blue", "green", "yellow"];
var GamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
////////////////////////////////////////////////////////////////////////////////
$("body").on("keypress", function() {
  if (!started) {
    $("h1").text("Level  " + level);
    nextSequence();
    started = true;
  }
});
////////////////////////////////////////////////////////////////////////////////
$("div .btn").on("click", function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});
////////////////////////////////////////////////////////////////////////////////
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level  " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  GamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}
////////////////////////////////////////////////////////////////////////////////
function checkAnswer(currentLevel) {
  if (GamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (GamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence()
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
    $("body").removeClass("game-over")
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
    console.log("wrong");
  }
}
////////////////////////////////////////////////////////////////////////////////
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
////////////////////////////////////////////////////////////////////////////////
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
////////////////////////////////////////////////////////////////////////////////
function startOver(){
  level=0;
  started = false;
  var userClickedPattern = [];
}
