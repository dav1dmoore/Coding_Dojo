let count = 3;

function like(){
    var likeCount = document.querySelector('#likeCount');
    count++
    likeCount.innerText = `${count} like(s)`;
}