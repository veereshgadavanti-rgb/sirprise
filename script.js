var time=5;

var timer=setInterval(function(){

document.getElementById("timer").innerHTML=time;

time--;

if(time<0){

clearInterval(timer);

document.getElementById("countdown").style.display="none";
document.getElementById("question").style.display="block";

}

},1000);


var no=document.getElementById("no");

function escape(){

no.style.left=Math.random()*window.innerWidth+"px";
no.style.top=Math.random()*window.innerHeight+"px";

}

no.addEventListener("mouseover",escape);
no.addEventListener("click",escape);


document.getElementById("yes").onclick=function(){

document.getElementById("question").style.display="none";

document.getElementById("final").style.display="block";

document.getElementById("music").play();

type();

fireworks();

setTimeout(showProposal,8000);

};


var text="Kavya KS ❤️\n\nYou are my today, tomorrow, and forever.\n\nI love you endlessly. 💖";

var i=0;

function type(){

if(i<text.length){

document.getElementById("message").innerHTML+=text.charAt(i);

i++;

setTimeout(type,40);

}

}


function showProposal(){

document.getElementById("proposal").style.display="block";

}


function fireworks(){

var canvas=document.getElementById("fireworks");

var ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

setInterval(function(){

ctx.fillStyle="rgba(0,0,0,0.2)";

ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="gold";

ctx.beginPath();

ctx.arc(Math.random()*canvas.width,Math.random()*canvas.height,5,0,Math.PI*2);

ctx.fill();

},100);

}
