var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
//var started = false;
var score = 0;
var taps = 1;
//var hs = [];

$(".myButton").click(nextSequence)


$(".btn").click(function(){
  var userColor = $(this).attr("id");
  userClickedPattern.push(userColor);

  playSound(userColor);
  animatePress(userColor);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(c){
  if (gamePattern[c] === userClickedPattern[c]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();

      }, 1000);
      score++;
      $("#score").text("Score: "+score);
      $("h2").text("Awesome")
      taps=score+1;
      //$("body").addClass("correct");
      setTimeout(
        function(){
          $("h2").text("");
        },200
      );
    }
  } else {
    playSound("wrong");
    $("h2").text("Wrong");
    $("#level-title").text("GAME OVER");
    $("#score").text("Final Score: "+score);
    setTimeout(
      function(){
        $("h2").text("")
      },1500
    );
    setTimeout(startOver(),1500);

    //hs.push(score);

}
}

function nextSequence(){
  $(".myButton").fadeOut(100);
  $("h2").text(taps+" tap(s)")
  userClickedPattern = [];
  //arnab++;
  //$("#level-title").text("Level " + arnab);
  $("#level-title").text("WATCH")
  var x = Math.floor(Math.random()*4);
  var randomColor = buttonColours[x];
  gamePattern.push(randomColor);
  $("#"+randomColor).addClass(randomColor+"b");
  setTimeout(
    function(){
      $("#"+randomColor).removeClass(randomColor+"b");
    },150
  );
  playSound(randomColor);
  setTimeout(
    function(){
      $("#level-title").text("PLAY");
    },800
  )
}

function animatePress(currentColor){
  $("#"+currentColor).addClass(currentColor+"b");
  taps = taps - 1;
  $("h2").text(taps+" tap(s)");
  setTimeout(function(){
    $("#"+currentColor).removeClass(currentColor+"b");
  }, 100);
}
function playSound(name){
  var audio = new Audio(name+".mp3");
  audio.play();
}

function startOver(){
  score = 0;
  gamePattern = [];
  $(".myButton").fadeIn(2000);
  $(".myButton").text("RETRY");
  setTimeout(
    function(){
      $("#score").text("Score: "+score);
    },2000
  )

  //started = false;
}
