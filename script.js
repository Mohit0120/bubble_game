var timer = 60;
var timerelem = document.querySelector('#timerelem');
var hitelem = document.querySelector('#hitelem');
var btmpnl = document.querySelector('#btmpnl');
var getNumber;
var scoreelem = document.querySelector('#scoreelem');
var score = 0;


setInterval(function(){
    if(timer>0){
        --timer;
        timerelem.textContent = timer;
    }
    else{
        btmpnl.innerHTML = '<h1 id = "over">game over</h1>'
    }
},1000);

function makeBubble(){
    for(var i = 0; i<286; i++){
        var randomNumber = Math.floor(Math.random()*10);
        var template = `<div class="bubble">${randomNumber}</div>`;
        btmpnl.innerHTML += template;
    }
}

function guessNumber(){
    getNumber = Math.floor(Math.random()*10);
    hitelem.textContent = getNumber;
};

btmpnl.addEventListener('click', function(details){
    var val = details.target.textContent;
    if(val==getNumber){
        score+=10;
        scoreelem.textContent = score;
        guessNumber();
        btmpnl.innerHTML = '';
        makeBubble();
    }
    else{
        console.log('nothing happened !')
    }
})

guessNumber();
makeBubble();
