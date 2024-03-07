let humanScore=0;
let computerScore=0;
let information=document.getElementById("information");
let rockbtn=document.getElementById("Rock");
let paperbtn=document.getElementById("Paper");
let scissorbtn=document.getElementById("Scissor");
let resetbtn=document.getElementById("Resetbtn");

var humanvalueEl=document.getElementById("humanvalue");
var computervalueEl=document.getElementById("computervalue");

rockbtn.addEventListener('click',()=>{
    
    humanvalueEl.innerHTML="Rock";
    var computervalue;
    var humanvalue=1;
    var randomnum=Math.floor((Math.random())*3)+1; 
    if(randomnum==1)
    {
        computervalueEl.innerHTML="Rock";
        computervalue=1;
    }
    else if(randomnum==2)
    {
        computervalueEl.innerHTML="Paper";
        computervalue=2;
    }
    else{
        computervalue=3;
        computervalueEl.innerHTML="Scissor";
    } 

    if(humanvalue===computervalue)
    {
        information.style.color="white";
        information.innerHTML="Draw";
    }
    else if(humanvalue<computervalue)
    {
        if(computervalue==2){
            information.style.color="red";
            information.innerHTML="You Lose";
            computerScore++;
            
        }
        else{
            information.style.color="green";
            information.innerHTML="You Win";
            humanScore++;            
        }
    }
    document.getElementById("computerScore").innerHTML=computerScore;
    document.getElementById("humanScore").innerHTML=humanScore;
})

paperbtn.addEventListener('click',()=>{
    humanvalueEl.innerHTML="Paper";
    var computervalue;
    var humanvalue=2;
    var randomnum=Math.floor((Math.random())*3)+1; 
    if(randomnum==1)
    {
        computervalue=1;
        computervalueEl.innerHTML="Rock";
    }
    else if(randomnum==2){
        computervalue=2;
        computervalueEl.innerHTML="Paper";
    }
    else
    {
        computervalue=3;
        computervalueEl.innerHTML="Scissor";
    }

    // console.log("clicked");

    if(humanvalue===computervalue)
    {        
        information.style.color="white";
        information.innerHTML="Draw";
    }
    else if(humanvalue<computervalue)
    {
        information.style.color="red";
        information.innerHTML="You Lose";
        computerScore++;
    }
    else 
    {
        information.style.color="green";
        information.innerHTML="You Win";
        humanScore++;
    }
    document.getElementById("computerScore").innerHTML=computerScore;
    document.getElementById("humanScore").innerHTML=humanScore;
})

scissorbtn.addEventListener('click',()=>{
    humanvalueEl.innerHTML="Scissor";
    var computervalue;
    var humanvalue=3;
    var randomnum=Math.floor((Math.random())*3)+1; 
    if(randomnum==1)
    {
        computervalue=1;
        computervalueEl.innerHTML="Rock";
    }
    else if(randomnum==2){
        computervalue=2;
        computervalueEl.innerHTML="Paper";
    }
    else 
    {
        computervalue=3;
        computervalueEl.innerHTML="Scisssor";
    }

    // console.log("clicked");

    if(humanvalue===computervalue)
    {
        information.style.color="white";
        information.innerHTML="Draw";
    }
    else if(humanvalue>computervalue)
    {
        if(computervalue==2)
        {
            information.style.color="green";
            information.innerHTML="You Win";
            humanScore++;
        }
        else
        {
            information.style.color="red";
            information.innerHTML="You Lose";
            computerScore++;
        }
    }
    document.getElementById("computerScore").innerHTML=computerScore;
    document.getElementById("humanScore").innerHTML=humanScore;
})

resetbtn.addEventListener('click',()=>{
    computerScore=0;
    humanScore=0;
    information.innerHTML="Start Game";
    information.style.color="white";
    document.getElementById("computerScore").innerHTML=computerScore;
    document.getElementById("humanScore").innerHTML=humanScore;
    computervalueEl.innerHTML="";
    humanvalueEl.innerHTML="";
})