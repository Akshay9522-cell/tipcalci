


// const sumArray=(numbers)=>{
    
//     let result=0;
//  for(const number of numbers){
//     console.log(number);
//     result=result + number;
//  }
//  return {result}

// }
// const num=[1,2,3,4,5]
// console.log(sumArray(num));

// UPPER CODE PRACTISE

// const sumArray=(numbers)=>{
     
//     let result=0;

//     for(const number of numbers){
//         console.log(number);
//         result=result + number;
//     }
//     return {result};
// }
// const num=[1,2,3,4,5,6,7,8,9,10]
// console.log(sumArray(num))

// const max=(numbers)=>{
//     let result=numbers[0];

//     for(const number of numbers){
//         if(number>result){
//             result=number;
//         }
//     }
//     return {result};
// }
// console.log(max([1,2,3,4,5,101,130,150]));


// const letterFrequency=(phrase)=>{

//     console.log(phrase);
//     // make a frequency object{}
//     let frequency={}
//     for(const letter of phrase){

//         // check if letter exists in frequency
//         if(letter in frequency){
//         // increament the value by +1
//         frequency[letter]=frequency[letter]+1
//         // otherwise set the value to 1
//         } else{
//             frequency[letter]=1
//         }
//     }
//     return frequency
// }
//console.log(letterFrequency('hi my name is akhsay shree khushi namdev we are hubby wifee'))

// WORD FREQUENCY IN JS

// const wordFrequecy=(phrase)=>{
//     let frequency={}
//     const words= phrase.split(' ')
//     console.log(words)

//     for(const word of words){
//         console.log(word)

//         if(word in frequency){
//             frequency[word]+=1;
//         } else{
//             frequency[word]=1
//         }
//     }
//     return frequency
// }

// HIGH ORDER FUNCTION 
// MAP  //loops and return array
// FILTER
// REDUCE

 let result=[1,2,3,4].map(number=>(number*2))
 console.log(result)

const actors=[
    {name:'khushi',networth:1000000},
    {name:'shree',networth:2000000},
    {name:'akki',networth:2000000},
]
 let data=(actors.filter(actor=> actor.networth>20));
 let result2  =actors.reduce( (a,b)=>a+b.networth,0)
 console.log(result2)


//   first.innerHTML=`<h1> ${data[0].name}</h1>`


 const players=[
     {name:'sachin tendulkar',century:100},
     {name:'MSD',century:10},
     {name:'virat kohli',century:105}
 ]


//  const nums=[1,2,3]
//  let result1=nums.reduce((prev,curr)=>prev + curr)
//  console.log(result1)

 const nums=[1,2,3,4]
 let result1=nums.reduce((prev,curr)=>prev* curr)
 console.log(result1)
//  console.log(players.filter(player=>player.century>=100))

//const userInput=prompt('Enter your lines ')
//console.log(wordFrequecy(userInput))

//  const wordFrequecy=(phrase)=>{

//     let1 frequency={}
    
//      words=phrase.split(" ")// CONVERT INTO AN ARRAY
//      console.log(words)
//      for (const word of words){
//         console.log(word);

//         if(word in frequency){
//             frequency[word]+=1

//         } else{
//             frequency[word]=1
//         }
//      }
//   console.log(words)
//     return frequency
//  }
//  const user=prompt('write your story')
//  console.log(wordFrequecy(user))

// FOR LOOP
// const numbers=[1,2,3,4,5,6];

// let result=[]

// for(const number of numbers){
//     result.push(number*2);
// }

// console.log(result);

// USE FUNCTION FOR DOUBLE THE NUMBER

// const double=(numbers)=>{
//     let result=[];

//     for(const number of numbers){
//         result.push(number*number);
//     }
//     return result;
// }
// console.log(double([1,2,3,4,5,6,7]))

// const howManyLetter=(pharse)=>{
 
    // for (const letter of   pharse){   // it is print each and every latter
    //         console.log(letter);
    // }
     
//     const result=0; 

//     for ( const index in pharse){
//         console.log(Number(index) + 1);
//         // result=Number(index)+1; //Number is used to add one in each and every number
//     }
//     return {result}
// }
  
//  const pharse= prompt('write your pharse')
//  console.log(howManyLetter(pharse));

//FOR PRACTISE 

// const Howmanyletter=(phrase)=>{
    

//     let result=0;
//     for(const index in phrase){ // GET SOME GLANCE WHEN WE REPLACE (OF) WITH (IN)
//         console.log(Number(index) +1);
//         result= Number(index)+1;
//     } // COMMENT  THIS BECAUSE ,OHH LAZY JUST COMMENT OUT AND SEE 
    // return {result:phrase.length};
//     return {result}
// }
// const phrase=prompt('Write your phrase');
//  console.log(Howmanyletter(phrase));


// OBJECT {}

//  const Person ={
//     name:"khushi",
//     sex:"female"
//  }
//  // access object through the dot(.) notation
//  console.log(Person.name)
//  console.log(Person.sex)

//  // access object through the bracrs notation

//  console.log(Person['name'])
//  console.log(Person['sex'])

// // assign properties in an object directly

// Person.contact='9244087018'
// console.log(Person.contact)

// console.log(Person)

// const introducer=(name,sex)=>{

//     const Person={
//        name:name,
//        sex:sex
//     }

//     const intro=`hi my name is ${Person.name} and my sex is ${Person.sex}`
//     return intro
// }
// console.log(introducer('khushi','female '))


// const employe=(name,id,dob)=>{
//     const person={
//         name:name,
//         id:id,
//         dob:dob,
//         assests:100000,
//         liabilties:50000,
//         networth:function(){
//             return this.assests - this.liabilties
//         }
//     }
//     const data= `A ${person.name} have a id and the number of id is ${person.id} and date of birth is${person.dob} and net worth is ${person.networth()}`
//   return data
// }
// console.log(employe('Khushi',"9244",'04/11/2000'))
// console.log(employe('Akshay',"9522",'25/07/2000'))




// const Automobile=(name,model,year,milege)=>{
//     const car={
//         name:name,
//         model:model,
//         year:year,
//         milege:milege
//     }

//     const data=`A ${name}of model no.${model}had launched in a ${year}with ${milege}km/l`
//     return data;
// }


// console.log(Automobile('fortuner','XUV','2024','15'))





// ARROW FUNCTION 
// ARROW FUNCTION WITH EXPLICIT RETURN

// const sum=(a,b)=>{
//     return a + b;
// }

// ARROW FUNCTION WITH IMPLICIT RETURN
//IMPORTANT : for IMPLICIT RETURN remove CURLY BRACES
  
//  const sum=(a,b)=> a+b;

// function sum(a,b){

//     return a+b;
// // }


// function calculateFood(food,tip){

//     tipPercentage=tip/100;
//     tipAmount=food * tipPercentage;
//     total=   sum(food,tipAmount);
    
//     return total;
//    }
//   console.log(calculateFood(300,20)) 


    // const  Add = (a,b)=>a + b
    //  console.log(Add(50,50));

    //  const Sub=(a,b)=> a-b;
    //  console.log(Sub(520,185))


    //  const Mul=(a,b)=>a*b;
    //  console.log(Mul(40,50))

    //  const Div=(a,b)=>(a/b)
    //  console.log(Div(5000,500))

     //ARRAY                                                                                                                                                                         

    //  const groceries=['bnana','apple','ORAANG    E']
    // //  console.log(groceries)

     // PUSH method is used to add an element at the end of the array
    //  groceries.push('PAPAYA')
    //  groceries.push('chikku')
    //  groceries.push('green apple')
    //  groceries.push('guava')
    // //  console.log(groceries)

     // ARRAY SLICE METHOD return the portion of array we want in a new array

   
    //  console.log(  groceries.slice(4,7))

    //  //ARRAY indexof 

    //    console.log( groceries.indexOf('chikku'))

    //    console.log(groceries.length)

// food= Number(prompt("how much was food"));
// tipPercentage=Number(prompt("tip%")/100);
// finalAmount=food * tipPercentage;
// totalAmount = food + finalAmount;

// console.log('tip:',finalAmount)
// console.log('total:',totalAmount);

// Math.random()*3;


// BABY WEATHER APP

// let weather=prompt("how is the weather");

// if(weather== 'rainy'){
//     console.log("grab your umbrella");
// } else{
//     console.log("wear  a sunglasses");
// }

// function greeting(name){
     
//     // greet='hi ' + name  + ',Nice to meet you'
//     greet=`hi ${name} ,Nice to meet you`
//     console.log(greet);
// }
// // greeting('khushi');
// function calculateFoodTotal(food,tip){
//     food=food;
// tipPercentage=tip/100;
// finalAmount=food * tipPercentage;
// totalAmount = food, finalAmount

// return totalAmount;

// }
// console.log(calculateFoodTotal(300,20));










// alert("write a number");
// let a = prompt("Enter a here")
// document.write(a)

// let age=prompt("enter a age");

// if(age>18){
//     console.log("adult");
// }else{
//     console.log("juvenile");
// }






// function  getData(dataID){
//     setTimeout(()=>{
//         console.log("data",dataID)
//     },2000);
//     dataID(55);
// }






// let DATA="secret information"
// class User{
   
//     constructor(name,email){
//       this.name=name;
//       this.email=email;
//     }

//     viewData(){
//         console.log(DATA)
//     }
// }


// class Adimn extends User{
//     constructor(name,email){
//         super(name,email);

//     }
    
//     editData(){
//         console.log("edit data")
//     }
// }



// let student1=new User("khushi","khushi@gmail.com");
// let student2=new User("akshay","akshay@gmail.com");

// let admin1=new Adimn("SHREE","SHREE@GMAIL.COM")


// // INHERITANCE

// // class person{

// //     eat(){
// //         console.log("eat")
// //     }
// //     sleep(){
// //         console.log("sleep")
// //     }
// // }
// // class doctor extends person {
// //     work(){
// //         console.log("give Treatment and medicine")
// //     }
// // }

// // let khushi=new doctor();







//  // classes

// // class ToyotaCar{

// //     constructor(brand,milege,fueltype){
// //         console.log("creating an object")
// //         this.brand=brand;
// //         this.milege=milege;
// //         this.fueltype=fueltype
// //     }
// //     start(){
// //         console.log("start")

// //     }
// //     stop(){
// //         console.log("stop")

// //     }


// // }



// // let Fortuner=new ToyotaCar("Fortuner",15,"Diesel");
// // console.log(Fortuner)
// // let lexus=new ToyotaCar("Lexus",13,"Petrol");










// // // const employe={
// // //     calcTax(){
// // //         console.log("tax rate is 10% ")
// // //     },
// // // }


// // // const karanArjun={
// // //     salary:50000
// // // };

// // // karanArjun.__proto__=employe;
// // // const student={
// // //     fullName:"Akshay Namdev",
// // //     marks: 99.99,

// // //     printMarks: function(){
// // //         console.log(marks);
// // //     },
// // // }




// // // let x="my love";
// // // console.log(x);


// // // let y=new String("my dear shree")
// // // console.log(y)

// // // console.log(y.indexOf("r"
// // // ))

// // // let a= "my love life"
// // // let arrString=[ "my", "wife"]

// // // console.log(a.replace("life",arrString[1    ]))





// // // // let div=document.querySelector("div");

// // // // div.innerText="Khusi"+" " + "Namdev"

// // // let newButton=document.createElemente("button")
// // // newButton.innerText="love me";
// // // console.log(newButton)

// // // let newBtn=document.createElement("button");

// // // newBtn.innerText="love me";


// // // document.querySelector("body").prepend(newBtn)


// // // let div=document.querySelector("div")

// // // div.innerText="black"

// // // div.style.backgroundColor="orange"


// // // let newBtn=document.createElement("button");
// // // newBtn.innerText="Follow Me!";

// // // console.log(newBtn);

// // // newBtn.style.color="orange";
// // // newBtn.style.backgroundColor="black"

// // // document.querySelector("body").prepend(newBtn)



// // // let div=document.querySelector("div");
// // // console.dir(div)

// // // let divs=document.querySelectorAll(".box");
// // // console.log(divs)


// // // let para=document.querySelector("p");
// // // console.log(para.setAttribute("class","myclass"));

// // // let div=document.querySelector("div")
// // // console.log(div)
// // // div.style.backgroundColor="orange"

// // // let newBtn=document.createElement("button");

// // // newBtn.innerText="click me!";

// // // console.log(newBtn)


// // // let div=document.querySelector("div")

// // // // div.append(newBtn)  insert element  inside bottom of div
// // // div.prepend(newBtn)   insert elemnt  inside top of div
 
// // // div.after(newBtn)  insert element  outside the bottom the div
// // //  div.before(newBtn)   // insert element outside the top of div

// // //  let newHeading=document.createElement("h1")
// // //  newHeading.innerHTML =" <i>akki one and only</i>"

// // //  document.querySelector("body").prepend(newHeading)

// // // //  newHeading.remove()

// // //  let para=document.querySelector("p");
// // //  para.remove();

// // // console.log("vivek and muskan")

// // // let a=5;
// // // let b=6;

// // // console.log(a+b)
// // //  

// // // function myFunction(msg){

// // //     console.log(msg)
// // // }
// // // myFu

// // // function countVowels(str){
// // //     let count=0;
// // //     for(const char of str){
// // //         if(char==="a"|| 
// // //             char==="e"||
// // //             char==="i"||
// // //             char==="o"||
// // //             char==="u"
// // //         ){
// // //             count++
// // //         }
      
// // //     }
// // //   return count;
// // // }

