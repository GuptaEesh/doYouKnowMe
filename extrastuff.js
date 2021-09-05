var r=require('readline-sync');

var score=0;

var primaryQuestion=r.question("What is your name?");
console.log("Welcome to the quiz on your life "+primaryQuestion+". Let's start! and please answer using option's index!");
var informationAboutMe1=[{
  question:"What is the meaning of life ? a: Existence b: Suffering",
  answer:"a"
},
{
  question:"What's best to do in hard times? a: Struggle b: Enjoy",
  answer:"a"

},{
  question:"What's best to do in good times? a: Struggle b: Enjoy",
  answer:"a"
}];
var informationAboutMe2=[{
  question:"How should we choose to struggle? a: With Smile b: Crying for what we can't handle ",
  answer:"a"
},
{
  question:"Which is the biggest religion? a: Hinduism b: Christianity c: Humanity",
  answer:"b"
}];

function letsGetIntoIt(informationAboutMe)
{
for(var i=0;i<informationAboutMe.length;i++){
  var letsgo=informationAboutMe[i];
var userans=r.question(letsgo.question);
if(userans==letsgo.answer){
console.log("That's absolutely right");
score+=1;
console.log("your current score is "+score);
}
else{
console.log("You are still a kid! :( ");}  
console.log("----------------------");
}}

letsGetIntoIt(informationAboutMe1);
var score1=score;

if(score==3){
  console.log("What!!!!! A perfect Score! You have know something about life. But don't be so philosophcal! Let's proceed further!");
  console.log("********************************");
  console.log("This is Life Test 2! Think and Answer!");
  letsGetIntoIt(informationAboutMe2);
  if(score==5)
  console.log("So you didn't fall into the trap!");
}

var score2=score-score1;
console.log("Level 1 score is "+ score1);
console.log("Level 2 score is "+ score2);

