
async function getData(){
    let response= await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');

    let data= await response.json();
    console.log(data);
}
getData();