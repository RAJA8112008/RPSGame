let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
//computer choicing process according to user choice
//Computer choice
const gencomchoice=(choice)=>{
    const options=["rock","paper","scissor"];
    const rdmIdx=Math.floor(Math.random()*3);
    return options[rdmIdx];
}
//processing of both choices computer and user
const playGame=(userChoice)=>{
   console.log("User choice:",userChoice);
   const comchoice=gencomchoice();
   console.log("Comp choice:",comchoice);
}

choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
     //Get the id of seleted choice 
     const userChoice=choice.getAttribute("id");
       playGame(userChoice);
   })
})