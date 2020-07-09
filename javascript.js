function rpsGame(yourChoice){
    

var humanChoice, botChoice;
 humanChoice = yourChoice.id;
 botChoice = numbertochoice(randnumber());
 console.log('computerChoice', botChoice);
 results = winner(humanChoice,botChoice) //[0,1] means bot won
 console.log(results);
 message = finalMessage(results);
 console.log(message);

 rpsFrontend(yourChoice.id,botChoice,message);
}

function randnumber(){
 return Math.floor(Math.random()*3);
}

function numbertochoice(number){
    return ['rock','paper','scissor'][number];
}

function winner(computerChoice,yourChoice){
   var outcomes = {
       'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
       'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
       'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0},
   };

var yourScore = outcomes[yourChoice][computerChoice];
var computerScore = outcomes[computerChoice][yourChoice];
return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
if (yourScore === 0){
    return {'message':'You won!', 'color':'green'};
} else if (yourScore === 0.5){
    return {'message':'Its a Tie!', 'color':'black'};
} else {
    return {'message':'You lost!', 'color':'red'};
}
}

function rpsFrontend(humanImageChoice,botImageChoice,finalMessage) {
    var imageData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }

// removing all images
    document.getElementById('rock').remove(),
    document.getElementById('paper').remove(),
    document.getElementById('scissor').remove()

    var humanDiv = document.createElement('div')
    var botDiv = document.createElement('div')
    var messageDiv = document.createElement('div')

    humanDiv.innerHTML = "<img src='" + imageData[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"

    botDiv.innerHTML = "<img src='" + imageData[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);' >"

    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] +"; font-size:60px; padding:30px;'>" + finalMessage['message'] +"</h1>"

    document.getElementById('rps').appendChild(humanDiv);
    document.getElementById('rps').appendChild(messageDiv);
    document.getElementById('rps').appendChild(botDiv);

    

}
