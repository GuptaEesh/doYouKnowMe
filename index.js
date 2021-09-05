var r=require('readline-sync');
const chalk=require('chalk');
var score=0;
var highScore=[{
  name: "Akshay",
  score: 6
},{
  name: "Soumya",
  score: 6
  }];
var informationAboutMe1=[{
  question:"What's my name?",
  answer:"eesh"
},
{
  question:"What's my age?",
  answer:22
},{
  question:"What's my favorite car?",
answer:"Rolls-Royce Phantom"
}];
var informationAboutMe2=[{
  question:"Where do I work?",
  answer:"TCS"
},
{
  question:"Where do I dream to work?",
  answer:"On myself"
},{
  question:"What's my targeted salary?",
answer:"Billions"
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
console.log("You were almost there! :(");}  
console.log("----------------------");
}}

console.log("Clear these 2 levels and I will definitely tell you what you mean to me!");
letsGetIntoIt(informationAboutMe1);
var score1=score;

if(score==2){
  console.log("I am very happy! :]]] So i have decided to give you my instagram! - eesh_gupta54 :) Enjoy!"+"\n"+"Try once more to get into LEVEL-2 !")
}
if(score==3){
  console.log("What!!!!! A perfect Score! you deserve a hug and my phone number too! Here you go - 70xxxxxxx7");
  console.log("********************************");
  console.log("You are eligible for level 2! JUST FOR YOU");
  letsGetIntoIt(informationAboutMe2);
  if(score>=5)
  console.log("I think we should be best friends now!");
}

var score2=score-score1;
console.log("Level 1 score is "+ score1);
console.log("Level 2 score is "+ score2);
if(score==6){
  console.log("Send me SS of your highest score so that I can update your name in the list of highest scorers just like  "+highScore[0].name+":"+highScore[0].score+" and "+highScore[1].name+":"+highScore[1].score);
}
