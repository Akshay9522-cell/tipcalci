
let title=document.getElementById('title')

title.innerText='good morning my wife'

let love=document.getElementById('love')

love.innerText="Daughters are loving and careing"

let message='hi my jaan';
love.innerHTML= `<p>${message}</p>`

love.style.color='red'
love.style.backgroundColor='yellow'


let reddiv=document.getElementById('red')
let yellowdiv=document.getElementById('yellow')
let greendiv=document.getElementById('green')

// reddiv.onclick=()=> console.log("red ")
// yellowdiv.onclick=()=> console.log("yellow ")
// greendiv.onclick=()=> console.log("green ")

let squares=document.querySelectorAll('.colorsquare')
//console.log(squares)


 const timesClicked={'red':0,'yellow':0,'green':0}

 squares.forEach(square=>{
    square.onclick = () =>{
        timesClicked[square.value] +=1
        square.innerText= timesClicked[square.value]
    }
 })

 function clearScore(){
    timesClicked.red=0
    timesClicked.yellow=0
    timesClicked.green=0
    squares.forEach(square=>{
        square.innerText=0
    })
 }

 const clearGame=document.getElementById('clear-game')
  clearGame.onclick=()=> clearScore()


 
 