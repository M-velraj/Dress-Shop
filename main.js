let cancel = document.querySelector("#close");
let menu = document.querySelector("#bars");

cancel.addEventListener("click",menuClosed);
menu.addEventListener("click",menuOpen);

function menuClosed (){
document.querySelector("#close").style.display="none";
document.querySelector(".navbar").style.display="none";
};
function menuOpen(){
    document.querySelector(".navbar").style.display="block";
    document.querySelector("#close").style.display="block";
    document.querySelector("bars").style.display="none";
}

var mainImg = document.getElementById("big-img");
var smallImg = document.getElementsByClassName("sm-img");
var maintImg = document.getElementById("big-2-img");
var smalltImg = document.getElementsByClassName("sm-2-img");

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}
smallImg[4].onclick = function(){
    mainImg.src = smallImg[4].src;
}
smallImg[5].onclick = function(){
    mainImg.src = smallImg[5].src;
}
smallImg[6].onclick = function(){
    mainImg.src = smallImg[6].src;
}
smallImg[7].onclick = function(){
    mainImg.src = smallImg[7].src;
}


smalltImg[0].onclick = function(){
    maintImg.src = smalltImg[0].src;
}
smalltImg[1].onclick = function(){
    maintImg.src = smalltImg[1].src;
}
smalltImg[2].onclick = function(){
    maintImg.src = smalltImg[2].src;
}
smalltImg[3].onclick = function(){
    maintImg.src = smalltImg[3].src;
}
smalltImg[4].onclick = function(){
    maintImg.src = smalltImg[4].src;
}
smalltImg[5].onclick = function(){
    maintImg.src = smalltImg[5].src;
}
smalltImg[6].onclick = function(){
    maintImg.src = smalltImg[6].src;
}
smalltImg[7].onclick = function(){
    maintImg.src = smalltImg[7].src;
}


