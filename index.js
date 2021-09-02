var readlineSync = require('readline-sync');

var score = 0

var userName = readlineSync.question("What is your name? ")

var welcomeMsg = "hey " + userName + " Welcome to KBC "

console.log(welcomeMsg)

function play(question, answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer === answer){
    console.log("you are right ")
    score+=1
    console.log( "your score is " + score)
  }else{
    console.log("ohh, you are wrong")
  }
}

questionOne ={
  question:"What is capital of japan? " ,
  answer:  "tokyo"
}

questionTwo = {
  question: "which country is boring?",
  answer: "china"
}

questionThree = {
  question: "city of dream is which city in india?",
  answer: "mumbai"
}

play(questionOne.question,questionOne.answer)
play(questionTwo.question,questionTwo.answer)
play(questionThree.question,questionTwo.answer)