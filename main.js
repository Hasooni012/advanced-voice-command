x = 0;
y = 0;
screen_width=0;
screen_height=0;
apple="";
speak_data="";
draw_apple = "";
to_number="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onResult = function(event) {

 console.log(event); 
 to_number=Number(content);
 if(Number.isInteger(to_number)){
  draw_apple="set";
 }
 else{
  status1="the speech has not be recognised";
 }

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  screen_width=window.innerWidth;
  screen_height=window.innerHeight;
  createCanvas(150,150);
  canvas.position(img,0,150);
}

function preload(){
  img=loadImage('apple.png');
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
  for(var i=1; i<= to_number; i++)
  {
    x= Math.floor(Math.random()*700);
    y=Math.floor(Math.random()*700);
    image(apple,x,y,50,50);
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
