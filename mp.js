let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h3=  document.querySelector("h3");
let btns = ["pink", "yellow", "green","blue"];
document.addEventListener("keypress",function(){
    // if( started == false){
    //     console.log("game started");
    //     started =true;
    // }
    console.log("game started");
    levelUp();
});
 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
 }
 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
 }

 function levelUp(){
    level++;
     h3.innerText=`level ${level}`;
     let randomInd= Math.floor(Math.random()*3);
     let randomColor= btns[randomInd];
     let randombtn = document.querySelector(`.${randomColor}`);
     console.log(randomInd);
     console.log(randomColor);
     console.log(randombtn);
     gameSeq.push(randomColor);
     console.log(gameSeq);
     gameFlash(randombtn);
 };
function checkAns(){
    let idx = level -1;
   // console.log("current level is :", level);
if(userSeq[idx]==gameSeq[idx]){
   // console.log("same value");
   setTimeout(levelUp, 1000);
} else{
    h3.innerText =`game over!!! Your score was ${level}press any key to restart.`; 
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout( function() {
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
}
}

 function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
 }
 let allbtns = document.querySelectorAll(".btn")
    for( btn of allbtns){
        btn.addEventListener("click",btnPress);
    }
 function reset(){
    started == false;
    gameSeq= [];
    userSeq = [];
    level =0;
 }