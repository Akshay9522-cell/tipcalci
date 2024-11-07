

const randomFruit = (fruits)=>{
      
    const randomNumber= Math.floor(Math.random() *fruits.length)
    return fruits[randomNumber]
}

let fruits=['apple','bnana','papaya','orange']
console.log(randomFruit(fruits))