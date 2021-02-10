var gameArray = [];
var userArray = [];
var level = 0 ;
var started = false;
////////////////////////////////////////////////////////////////////////////////
$("body").on("keypress", function() {
  if (!started) {
    $("h1").text("Level  " + level);
    keyIsPresed();                        //buton procees
    started = true;
  }
});
//////////////////////////////////////
userChoiceOneFromFour();                  //mouse procees
//////////////////////////////////////

////////////////////////////// functions ///////////////////////////////////////

function keyIsPresed(){
    userArray = []
    level++;
    $("h1").text("Level  "+level);
    var random = gameRandomChoice();
    GameChoiceOneFromFour(random);
    addWhatGameChoiceToHisArray(random);
}

////////////////////////////////////////

function userChoiceOneFromFour(){
  $("div .btn").click(function(){
  var ourButton = ($(this).attr("id"));
  userArray.push(ourButton)
  new Audio("sounds/"+ourButton+".mp3").play();
  $("#"+ourButton).addClass("pressed");
  timerUser(100 , ourButton , "pressed");
  checkAnswer(userArray.length-1);
  });
}

////////////////////////////////////////

function checkAnswer(currentLevel) {
  if (gameArray[currentLevel] === userArray[currentLevel]) {
    if (gameArray.length === userArray.length) {
      setTimeout(function() {
        keyIsPresed();
      }, 1000);
    }
  } else {
    new Audio("sounds/wrong.mp3").play();
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
      $("body").removeClass("game-over")
    },200);
    level=0;
    started = false;
    gameArray = [];
  }
}

////////////////////////////////////////

function GameChoiceOneFromFour(idName){
  new Audio("sounds/"+idName+".mp3").play();
  $("#"+idName).css("opacity","0.1");
  timerGame(100,idName);
}

////////////////////////////////////////

function timerUser(time , idName , classCss){
   setTimeout(function () {
    $("#"+idName).removeClass(classCss);
   }, time);
 }

////////////////////////////////////////

 function timerGame(time , idName ){
    setTimeout(function () {
     $("#"+idName).css("opacity","1");
    }, time);
  }

////////////////////////////////////////

 function gameRandomChoice(){
   var number = Math.floor((Math.random()*4+1));
   switch (number) {
       case 1:
       return "green";
       break;
       case 2:
       return "red";
       break;
       case 3:
       return "yellow";
       break;
       case 4:
       return "blue";
       break;
   }
 }

////////////////////////////////////////

function addWhatGameChoiceToHisArray(theItem){
  gameArray.push(theItem);
}

////////////////////////////////////////





//playNow();

// ////////////////////////////////////////////////////////////////////////////////
// var buttonColours = ["red", "blue", "green", "yellow"];
// var GamePattern = [];
// var userClickedPattern = [];
// var started = false;
// var level = 0;
// ////////////////////////////////////////////////////////////////////////////////
// $("body").on("keypress", function() {
//   if (!started) {
//     $("h1").text("Level  " + level);
//     nextSequence();
//     started = true;
//   }
// });
// ////////////////////////////////////////////////////////////////////////////////
// $("div .btn").on("click", function() {
//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
//   checkAnswer(userClickedPattern.length - 1);
// });
// ////////////////////////////////////////////////////////////////////////////////
// function checkAnswer(currentLevel) {
//   if (GamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     console.log("success");
//     if (GamePattern.length === userClickedPattern.length) {
//       setTimeout(function() {
//         nextSequence()
//       }, 1000);
//     }
//   } else {
//     playSound("wrong");
//     $("body").addClass("game-over");
//     setTimeout(function(){
//     $("body").removeClass("game-over")
//     },200);
//     $("h1").text("Game Over, Press Any Key to Restart");
//     startOver();
//     console.log("wrong");
//   }
// }
// ////////////////////////////////////////////////////////////////////////////////
// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("h1").text("Level  " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   GamePattern.push(randomChosenColour);
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }
// ////////////////////////////////////////////////////////////////////////////////
// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }
// ////////////////////////////////////////////////////////////////////////////////
// function animatePress(currentColour) {
//   $("#" + currentColour).addClass("pressed");
//   setTimeout(function() {
//     $("#" + currentColour).removeClass("pressed");
//   }, 100);
// }
// ////////////////////////////////////////////////////////////////////////////////
// function startOver(){
//   level=0;
//   started = false;
//   var userClickedPattern = [];
// }


//
