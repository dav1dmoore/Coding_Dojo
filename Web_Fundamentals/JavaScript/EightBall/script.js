var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var responses = document.getElementById('answer');
var clear = document.getElementById('question');
var ball = document.getElementById('ball');

function getAnswer() {
    if(clear.value == ''){
        return
    }
    ball.setAttribute("src", "ball.gif");
    setTimeout(replace, 2000);
}

function replace() {
    clear.value = '';
    ball.setAttribute("src", "ballStill.jpg");
    responses.innerText = lifesAnswers[Math.floor(Math.random()*lifesAnswers.length)];
}
