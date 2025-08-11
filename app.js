let userseq=[];
let gameseq=[];
let level=0;
let colors=["purple","orange","blue","pink"];
let isStarted=false;
let h2=document.querySelector("h2");
let body=document.querySelector("body");
function btnpress(){
    console.log(this);
    btn=this;
    buttonflash(btn);
    console.log(btn.getAttribute("id"));
    userseq.push(colors[btn.getAttribute("id")]);
    checkAns(userseq.length-1);
}
function reset(){
     userseq=[];
      gameseq=[];
      level=0; 
       isStarted=false;
}
function buttonflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },200);
}
function checkAns(idx){
    if(gameseq[idx]===userseq[idx]){
        if(userseq.length==gameseq.length){
       levelup();
        }
    }else{
        h2.innerHTML=`Game over!Your score was <b>${level}</b> <br> Press any key to start`;
        body.classList.add("gameend");
        setTimeout(()=>{
           body.classList.remove("gameend")
        },100);
        reset();
    }
}
document.addEventListener("keypress",()=>{
    if(isStarted==false){
        console.log("game is started");
        isStarted=true;
        levelup();
    }
})
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomidx=Math.floor(Math.random()*3);
    let randombtn=colors[randomidx];
    let btn=document.querySelector("."+randombtn);
    console.log(`random btn ${randombtn}`);
    buttonflash(btn);
    gameseq.push(randombtn);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}