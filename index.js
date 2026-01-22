let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const  msg=document.querySelector("#msg");
//computer choicing process according to user choice
//Computer choice
const gencomchoice=(choice)=>{
    const options=["rock","paper","scissor"];
    const rdmIdx=Math.floor(Math.random()*3);
    return options[rdmIdx];
}

const showwinner=(userwin,comchoice,userChoice)=>{
   if(userwin){
    msg.innerHTML=`You Win.your ${userChoice} beats ${comchoice}`;
    msg.style.backgroundColor="green";
   }else{
     msg.innerHTML=`You lose.${comchoice} beats your ${userChoice}`;
       msg.style.backgroundColor="red";
   }
}

const DrawMatch=()=>{
    msg.innerHTML='Game Was Draw,Try again.';
    msg.style.backgroundColor="#081b31";
}
//processing of both choices computer and user
const playGame=(userChoice)=>{
   console.log("User choice:",userChoice);
   const comchoice=gencomchoice();
   console.log("Comp choice:",comchoice);
   //proceesing according to the choice who will win 1->mathDraw
   if(userChoice===comchoice){
    DrawMatch();
   }else{
    let userwin=true;
         //some conditions exists here
    // computer->rock
    if(comchoice==='rock'){
        userwin= userChoice==='scissor'?false:true;
    }else if(comchoice==='paper'){
        userwin=userChoice==='scissor'?true:false;
    }else{
        //scissor
        userwin=userChoice==='paper'? false:true;
    }
    showwinner(userwin,comchoice,userChoice);
   }
}

choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
     //Get the id of seleted choice 
     const userChoice=choice.getAttribute("id");
       playGame(userChoice);
   })
})