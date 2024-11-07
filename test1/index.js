 const button=document.querySelector("button");

 button.addEventListener("click",updateName);

 function updateName(){
    const name=prompt("Enter a player name");
    button.textContent=`playerName:${name}`;
 }
 updateName();