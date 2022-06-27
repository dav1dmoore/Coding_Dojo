function hide(element){
    element.remove()
}

function logIn(element){
    element.innerText = 'Logout';
}

var likeCt = document.getElementById("btnNinja");
var ninjaCt = 13;
likeCt.addEventListener("click", function addCt(){
    ninjaCt++
    this.innerText = `${ninjaCt} likes`;
    alert('Ninja was liked')
});

var likeCtDojo = document.getElementById("btnDojo");
var ninjaCtDojo = 37;
likeCtDojo.addEventListener("click", function addCt(){
    ninjaCtDojo++
    this.innerText = `${ninjaCtDojo} likes`;
    alert('Ninja was liked')
});
