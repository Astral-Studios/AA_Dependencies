function SetUpGames() {
  AddProject("Hextris",          "img/Hextris.png",        "Projects/Hextris/index.html");
  AddProject("2048",             "img/2048.png",           "Projects/2048/index.html");
  AddProject("Tetris",           "img/Tetris.jpg",         "Projects/Tetris/index.html");
  AddProject("Chrome Dino Game", "img/DinoGame.png",       "Projects/DinoGame/index.html");
  
  AddProject("Flappy Bird",      "img/FlappyBird.jpeg",    "Projects/FlappyBird/index.html");
  AddProject("Snake",            "img/Snake.png",          "Projects/Snake/index.html");
  AddProject("Pac Man",          "img/PacGame.jpg",        "Projects/PacMan/index.html");
  AddProject("Javascript Racer", "img/JsRacer.png",        "Projects/JsRacer/index.html");
  
  AddProject("Space Company",    "img/SpaceCompany.png",   "Projects/SpaceCompany/index.html");
  AddProject("Cookie Clicker",   "img/CookeClickTins.jpg", "Projects/Cookie Clicker/index.html");
  AddProject("Hit The Target",   "img/HitTheTarget.png",   "Projects/HitTheTarget/index.html");
  AddProject("Doge The Lava",    "img/DogeLava.png",       "Projects/DogeLava/index.html");
  
  LoadAnnouncment("ChangeLog52", "Change Log 0.52", "The website has recently been updated to the Christmas theme! With christmas theme there are a couple of new things, a countdown to christmas at the top of the page. Merry Christmas!");
  LoadAnnouncment("URLChange", "Amazing Math URL change", "Inorder to improve the experience of our users we have made the decision to switch over to the domain amazing-math.net. This change should be active in the next 72 to 96 hours as of Satruday, November 13th.");
  set_audio(true)
}

var audio=new Audio("https://fightingox1.github.io/Amazing-Math/Wham!%20-%20Last%20Christmas%20(Instrumental)-Instrumentals.mp3");
var muted;
var PathToLoad;

// tyler is gay

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
}

var currentAnnouncment = "";

function LoadAnnouncment(Name, Title, Value) {
  currentAnnouncment = Name;
  var cookieVal = getCookie(Name);
  if (cookieVal == null) {
    document.getElementById("AnnouncmentNameText").innerHTML = Title;
    document.getElementById("AnnouncmentText").innerHTML = Value;
  } else {
    document.getElementById("Announcment").id = "hidden"; 
  }
}


function CloseAnnouncment() {
  document.cookie = currentAnnouncment + "=loaded;";
  document.getElementById("Announcment").id = "hidden";
}

function AddProject(PrjName, ImgSrc, Game) {
  document.getElementById("GamesList").innerHTML +=
    "<div class='Game'><div class='GameName'>"
      +
        PrjName +
        "<hr class='solid'>" +
        "<img src='" + ImgSrc + "' class='GameImg'>" +
        "<button class='GameButton' onclick='Load(" + '"' + Game + '"' + ")'>Play Game</button>"
      +
    "</div></div>"
}

var IsMuted = false;

function MuteUnmute() {
  var muteButton = document.getElementById("MuteButton");
  set_audio(false);
  if (!IsMuted) {
    muteButton.src = "unmute.png";
  } else {
    muteButton.src = "mute.png"; 
  }
  IsMuted = !IsMuted;
  
}

function set_audio(startup){
 if(startup){
   muted = true;
   startup = false;
 }
 else{
  if(muted){
    audio.play();
    muted = false;
  }
  else{
    audio.pause();
    muted = true;
  
  }}}

function Load(Input) {
  //alert(Input);
  window.location.href = Input;
}

var SettingsOpened = true;

function OpenCloseSettings() {
  var settingsButton = document.getElementById("SettingsWindow");
  if (SettingsOpened) {
    settingsButton.classList.remove("SettingsClose");
    settingsButton.classList.add("SettingsOpen");
  } else {
    settingsButton.classList.add("SettingsClose");
    settingsButton.classList.remove("SettingsOpen");
  }
  SettingsOpened = !SettingsOpened;
}

var shownId = "Snowflakes_Shown";
var hiddenId = "Snowflakes_Hidden";

function DisableSnowflakes() {
  alert("Disablaling Snowflakes");
  document.getElementById(shownId).id = hiddenId;
  document.getElementById("HideSnowflakes").innerHTML = "Show Snowflakes";
  //document.getElementById("HideSnowflakes").onclick = "EnableSnowflakes()";
}

function EnableSnowflakes() {
  document.getElementById(hiddenId).id = shownId;
  document.getElementById("HideSnowflakes").innerHTML = "Hide Snowflakes";
  //document.getElementById("HideSnowflakes").onclick = "DisableSnowflakes()";
}
