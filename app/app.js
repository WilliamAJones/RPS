// let rock= document.getElementById('The Rock').onclick = user;
// let paper = document.getElementById('Paper Chaser').onclick
// let scissors = document.getElementById('scissors').onclick 
// can set array? why bother
// let choices = [{
//     name: 'The Rock',
//     beats: 'scissors'
//     audio: 
// }, {}, {}]
  //invoke a setComputerChoice function
    //function setComputerChoice() {
    //assign computer choice
    //invoke compare() use choice === rather than comparing array objects....
// }



function playerChoices(name){

    let userChoice = name
    
    console.log("User Selects: " + userChoice)
    
    alert ("I SEE YOU HAVE SUMMONED-> " +  userChoice +'...');

    let computerChoice = Math.random();
         if (computerChoice < 0.33) {
             computerChoice = "The Rock";
          }else if(computerChoice <0.66) {
             computerChoice = "Paper Chaser";
          }else{
             computerChoice = "Edward Scissor Hands";
          }; 
    
    alert ("I HAVE SUMMONED-> " + computerChoice +'...');
    
    console.log("Computer Selects: " + computerChoice);
    console.log(compare(userChoice, computerChoice)); 
}
    function compare(userChoice, computerChoice) {
    
		    if (userChoice === computerChoice) {
            alert("It's a push... I'll get you next time!");
            return "It's a push... I'll get you next time!";
        }
 
        if (userChoice === "The Rock") {
            if (computerChoice === "Edward Scissor Hands") {
                alert( "Player Wins: You have chosen...wisely");
                return "Player Wins: You have chosen...wisely";
            }else{
                alert("Computer wins : 'You steady chasin' that paper, just live your life , Oh! Ay ay ay'" );
                return "Computer wins :  'You steady chasin' that paper, just live your life , Oh! Ay ay ay'";
            }
				}
 
         if (userChoice === "Paper Chaser") {
             if (computerChoice === "The Rock") {
                alert( "Player Wins: You have chosen...wisely");
                return "Player Wins: You have chosen...wisely";
              } else {
                alert("Uh oh... It's Edward... Computer wins" );
                return "Uh oh...It's Edward... Computer wins";
              }
		     }
		
		if (userChoice === "Edward Scissor Hands") {
             if (computerChoice=== "The Rock") {
                alert("Computer wins : Do you smell what The Rock is cookin' ?" );
                return "Computer Wins : Do you smell what The Rock is cookin' ?";
             } else {
                alert( "Player Wins: You have chosen...wisely");
                return "Player Wins: You have chosen...wisely";
            }
        }
    }
